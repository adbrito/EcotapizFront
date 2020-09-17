import { Injectable } from '@angular/core';
import { HTTPService } from './http.service';
import { ImageStorageService } from './image-storage.service';
import { MiscellanousHttpRequestService } from './miscellanous-http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpRequestService {

  constructor(public http: HTTPService, 
    public misc: MiscellanousHttpRequestService,
    public image: ImageStorageService) { }

    async getProductsList(){
      //console.log(HTTPService.url);
      let items = await this.make_request()
      this.modify_array(items)
      await this.misc.delay(1000)
      return items;
    }
  
    async make_request(){
      let productsTemp:Array<Object> = new Array<Object>();
      let x = await this.http.get(HTTPService.url + "real-products", HTTPService.httpOptionsRest).then((res:any) =>{
        productsTemp = res as Array<Object>
      })
      return productsTemp;
    }
  
    modify_array(products: Array<Object>){
      products.forEach( async (product)=>{
        product['src'] = await this.image.getImageUrl(product['src'])
      })
    }
}
