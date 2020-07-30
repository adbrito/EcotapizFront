import { Component, OnInit } from '@angular/core';
import { PostObject } from '../../servicios/postObject';
import { DataTransferService } from '../../servicios/data-transfer.service';
import { Router } from '@angular/router';
import { GenComponent } from '../../servicios/GenComponent';

@Component({
  selector: 'app-blog-note',
  templateUrl: './blog-note.component.html',
  styleUrls: ['./blog-note.component.scss']
})
export class BlogNoteComponent extends GenComponent implements OnInit {

  postData: PostObject

  constructor(private data: DataTransferService, private router: Router) {
    super();
    this.GenPost = new PostObject 
    this.GenData = new PostObject
    this.postData = (<PostObject> this.GenData)
    this.link = ['/blog/aux',{outlets:{'aux': 'post'}}]
  }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => (<PostObject>this.GenPost) = objectSource);
  }

  newObject(){
    this.data.changeObject(<PostObject>(this.GenData));
    this.router.navigate(this.link);
  }

}
