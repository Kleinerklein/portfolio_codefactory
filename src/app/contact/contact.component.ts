import { Component, OnInit } from '@angular/core';
import {Ripple, Input, initTE} from "tw-elements";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
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

  onSubmit(e: Event){

    console.log(this.newContact.value)
    if(this.newContact.valid){
      emailjs.sendForm('service_q2d0aq9', 'template_6264dkk', e.target as HTMLFormElement, 'avhEeJPCZ7EAcTWQC')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        Swal.fire({
          title: "Thanks for the message",
          icon: "success",
          text: "I will get in touch as soon as possible"
          })
        this.newContact.reset();
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          title: "Opps something went wrong",
          icon: "error",
          text: "Please try again"
          })
      });
      
    }
    else{
      Swal.fire({
        title: "Opps",
        icon: "error",
        text: "please fill out all fields and use a valid e-mail address"
        })
    }
   
  }
  
}
