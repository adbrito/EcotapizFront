import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
 /*styleUrls: ['./sidebar.scss']*/
})
export class SidebarComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleside() {
    this.open = !this.open;
  }
}
