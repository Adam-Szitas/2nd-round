import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth-service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private authService: AuthService) {}
  public loginForm: FormGroup = new FormGroup({});

  public ngOnInit(): void {
      this.loginForm = new FormGroup(
        {
          userName: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
        }
      );
  }

  public register(): void{
    this.router.navigateByUrl('register');
  }

  public submit(): void{
    if(this.loginForm.valid){
      const data = this.loginForm.getRawValue();
      this.authService.login(data);
    }
  }
}
