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


    async getProductsById(materialID: number){
      let items:Array<Object> = new Array<Object>();
      if(materialID > 0){
          items = await this.getProductsListBySearch(materialID)
      } else if (materialID == -1){
          items = await this.getProductsList()
      }
      return items

    }

    async getProductsList(){
      //console.log(HTTPService.url);
      let items = await this.make_request()
      this.modify_array(items)
      await this.misc.delay(1300)
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
        product['material'] = await this.misc.getMaterialName(product['material'])
        product['src'] = await this.image.getImageUrl(product['src'])
      })
    }

    async getProductsListBySearch(materialID: number){
      //console.log(HTTPService.url);
      let items = await this.make_request2(materialID)
      if(items.length > 0){
        this.modify_array(items)
        await this.misc.delay(1100)
      }
      return items;
    }

    async make_request2(materialID: number){
      let productsTemp:Array<Object> = new Array<Object>();
      let append:string = "?q={\"material\":" + materialID +"}"
      let x = await this.http.get(HTTPService.url + "real-products" + append , HTTPService.httpOptionsRest).then((res:any) =>{
        productsTemp = res as Array<Object>
      })
      return productsTemp;
    }

    async getProductsListBySearcher(searcher:string){
      //console.log(HTTPService.url);
      let items = await this.make_request3(searcher)
      if(items.length > 0){
        this.modify_array(items)
        await this.misc.delay(1300)
      }
      return items;
    }
  
    async make_request3(searcher:string){
      let productsTemp:Array<Object> = new Array<Object>();
      let append:string = "?q={\"$or\":[{\"titulo\":{\"$regex\":\"" + searcher + "\"}},{\"keywords\":{\"$regex\":\"" + searcher + "\"}},{\"contenido\":{\"$regex\":\"" + searcher + "\"}}]}"
      let x = await this.http.get(HTTPService.url + "real-products" + append , HTTPService.httpOptionsRest).then((res:any) =>{
        productsTemp = res as Array<Object>
      })
      return productsTemp;
    }
}
