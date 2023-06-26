import { Component, OnInit } from '@angular/core';
import {Ripple, Input, initTE} from "tw-elements";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  constructor(){}

  
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    initTE({ Ripple, Input})
  }

  newContact = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    message: new FormControl('', Validators.required)
  })

  onSubmit(){
    if(this.newContact.valid){
      Swal.fire({
      title: "Thanks for the message",
      icon: "success",
      
      })
    }
    else{
      Swal.fire({
        title: "Opps",
        icon: "error",
        
        })
    }
   
  }
  
}
