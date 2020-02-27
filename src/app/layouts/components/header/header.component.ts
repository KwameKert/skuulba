import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../modules/authentication/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe : EventEmitter<any> = new EventEmitter();

  constructor(private _router: Router, private _authService: AuthService ) { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.toggleSidebarForMe.emit();
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  logUserOut(){
    if(this._authService.logUserOut()){
      this._router.navigate(['/login']);
    }
  }
}
