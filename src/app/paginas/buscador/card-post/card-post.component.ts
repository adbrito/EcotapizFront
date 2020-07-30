import { Component, OnInit } from '@angular/core';
import { PostObject } from '../../servicios/postObject';
import { DataTransferService } from '../../servicios/data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {

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
