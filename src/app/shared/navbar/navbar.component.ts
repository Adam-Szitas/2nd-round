import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent{
  constructor(private authService: AuthService){}

  public logout(){
    this.authService.logout();
  }
}
