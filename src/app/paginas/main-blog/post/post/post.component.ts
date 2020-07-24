import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../data-transfer.service';
import * as data from '../../../../../assets/recursos-datos/posts.json';
import { PostObject } from '../../postObject';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postObject: PostObject 
  

  constructor(private data: DataTransferService) { }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => this.postObject = objectSource);
  }

}
