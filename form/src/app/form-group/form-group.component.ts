import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {

  profileForm=new FormGroup({
    name:new FormControl('anil'),
    password:new FormControl('123'),
    email:new FormControl('abc@gmail.com'),
  })

  onSubmit(){
    console.log(this.profileForm.value);
    
  }
  onSet(){
    this.profileForm.setValue({
      name:'raja',
      password:'333',
      email:'raja@gmail.com'
    })
  }
  }
