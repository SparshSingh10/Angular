import { Component } from '@angular/core';
import { UserService, User } from '../../services/user.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
user!: User;

constructor(private userService:UserService){}
  // ngOnInit():void{
  //   this.user=this.userService.getCurrentUser();
  //   console.log('FOOTER: User loaded', this.user);
    
  // }
  // earler when first time footer loaded than it get user (guest get shown) but wehn you refresh after login than fotter again load and new current user value SharedWorker, than why we have to suscribe so that if change aciur in curent user than this also get change
  ngOnInit(): void {
  this.userService.currentUser$.subscribe(user => {
    console.log('FOOTER: User updated', user);
    this.user = user;
  });
}

}
