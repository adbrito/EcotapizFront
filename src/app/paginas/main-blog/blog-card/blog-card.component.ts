import { Component, OnInit, Input } from '@angular/core';
import { PostObject } from '../postObject';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

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
