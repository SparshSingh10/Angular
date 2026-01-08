import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  // private selectedRowSubject = new Subject<any>();
// You were using Subject.
// Think of Subject like a live announcement 📢
// Timeline:
// You are on Scrivania Italia
// You click a row
// → Service broadcasts the row
// Scrivania Estero is NOT open yet
// You navigate to Scrivania Estero
// Estero starts listening AFTER the announcement

// kul mila ke subject braodcast kre ga tho turant sunna hai, dusra compnet lazy loading ki waje se load hi nihi hua tha tho jab navbar link se open kiya tho wo chalu hua phele baar aur uspar kuch aucha hi nhi
// liken ye bheaviour subject last message ka yaad rakhta hai taaki koi naya banda aaye tho read kar sake islye bheavauour wala display ho raha hai


private selectedRowSubject = new BehaviorSubject<any>(null);
// What is BehaviorSubject in simple words?
// Think of BehaviorSubject like a notice board 🧾
// Whenever someone writes something
// The board keeps the last message
// Anyone who comes later can read it
// So now:
// Italia sends row
// Service stores it
// Estero opens later
// Estero immediately gets the last row
// 📌 That’s why it works now.

// 🔑 One-line difference (MEMORIZE THIS)

// Subject = live event (no memory)
// BehaviorSubject = state (with memory)
  selectedRow$ = this.selectedRowSubject.asObservable();


  shareSelectedRow(row: any) {
    console.log('SERVICE: Broadcasting row', row);
    this.selectedRowSubject.next(row);
  }
}
// Sibling communication is achieved by using a shared service with a BehaviorSubject, where one component emits data and the other subscribes to it
// Angular me sibling communication ke liye hum shared service use karte hain.
// Service ke andar BehaviorSubject hota hai jo last value yaad rakhta hai, taaki agar koi component baad me load ho (lazy loading), to bhi use last data mil jaye.
// Components (jaise Scrivania Italia ya Estero) directly data change nahi karte.
// Wo sirf service ke method ko call karte hain, jaise shareSelectedRow(row).
// Actual data update service ke andar hota hai using BehaviorSubject.next().
// asObservable() isliye use karte hain taaki components sirf data sun sakein (subscribe), lekin data bhej na sakein (next na kar sakein).
// Isse galti se ya future me koi component shared data ko directly kharab nahi kar paata.
// Short me:
// Service = owner of data
// Components = request karte hain
// BehaviorSubject = last data yaad rakhta hai
// Observable = read-only access