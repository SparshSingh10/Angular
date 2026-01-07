import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  name = new FormControl('anil');
  password = new FormControl('123');

meraFun(){
  console.log(this.name.value);
  console.log(this.password.value);
  
}
setValues(){
  this.name.setValue('Arsh');
  this.password.setValue('111111');

}

}

// FormControl Reactive Forms ka ek object hota hai.
// name = new FormControl('anil'); ka matlab hai ki name ek FormControl object hai jo form field ki value ko store karta hai, value ke changes track karta hai, aur validation (jaise required, minLength) handle karta hai.

// HTML me [formControl] ek Angular directive hota hai.
// <input [formControl]="name"> likhne se Angular ko yeh bataya jaata hai ki is input field ko name wale FormControl object ke saath connect kar do.

// Is connection ke baad input aur FormControl sync ho jaate hain.
// User input me kuch type karta hai to FormControl ki value update hoti hai, aur agar code se setValue() use kiya jaata hai to input field automatically update ho jaata hai.