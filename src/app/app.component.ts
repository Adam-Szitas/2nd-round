import { Component } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService){}
  title = '2nd-round';

  public isUserLoggedIn$: Observable<string | null> = this.authService.isUserLoggedIn$;
}
