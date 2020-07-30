import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../../servicios/data-transfer.service';
import * as data from '../../../../../assets/recursos-datos/posts.json';
import { PostObject } from '../../../servicios/postObject';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postObject: PostObject 
  

  constructor(private data: DataTransferService) { }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => this.postObject = objectSource);
  }

}
