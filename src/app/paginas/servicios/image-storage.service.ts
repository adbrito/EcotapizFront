import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  constructor(private afStorage: AngularFireStorage) { }

  async getImageUrl(path: string){
    let src = ""
    let url = this.afStorage.storage.refFromURL(path);
    let x = await url.getDownloadURL().then((value) =>{
      src = value
    })
    return src;
  }
}
