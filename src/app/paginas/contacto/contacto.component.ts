import { Component, OnInit } from '@angular/core';
import { ContactService } from '../servicios/contact.service';
import {Contact} from '../contacto/contact';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
contacto= new Contact();
  


  constructor(
private contactService: ContactService

    ){}
ngOnInit() {
    
  }

addContacto() {
    this.contactService.addContacto(this.contacto)
      .subscribe(data => {
        console.log("imprimiendo data",data, this.contacto)
      })      
  }


  /*
model = new Contact();
  submitted = false;
  error: {};



  constructor(
        private router: Router,

        private contactService: ContactService

    ) { }

  ngOnInit() {
    
  }

 onSubmit() {
    this.submitted = true;
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }*/

    

}