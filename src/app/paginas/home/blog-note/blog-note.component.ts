import { Component, OnInit } from '@angular/core';
import * as posts from '../../../../assets/recursos-datos/posts.json'
import { PostObject } from '../../main-blog/postObject';
import { DataTransferService } from '../../main-blog/data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-note',
  templateUrl: './blog-note.component.html',
  styleUrls: ['./blog-note.component.css']
})
export class BlogNoteComponent implements OnInit {

  postObject: PostObject;
  postData: PostObject;

  constructor(private data: DataTransferService, private router: Router) { 
    this.postData = new PostObject
  }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => this.postObject = objectSource);
  }

  defineAttributes(postObject: object){
    (<PostObject>this.postData).defineAttributes(postObject);  
  }

  newObject(){
    this.data.changeObject(this.postData);
    //[routerLink]="['/blog/aux',{outlets:{'aux': 'post'}}]"
    this.router.navigate(['/blog/aux',{outlets:{'aux': 'post'}}]);
  }

}
