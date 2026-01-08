import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

   showError(message: string) {
    console.log('NOTIFICATION ERROR:', message);
    alert(message); // simple UI for now
  }
  showSuccess(message: string) {
    console.log('NOTIFICATION SUCCESS:', message);
    alert(message);
  }
}
