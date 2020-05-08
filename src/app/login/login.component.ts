import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    public loginInvalid: boolean;
    private formSubmitAttempt: boolean;
    private returnUrl: string;
  
    constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService
    ) {
    }
  
    ngOnInit() {
  
      this.form = this.fb.group({
        username: ['', Validators.email],
        password: ['', Validators.required]
      });
  
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
  
     onSubmit() {
      this.loginInvalid = false;
      this.formSubmitAttempt = false;
      if (this.form.valid) {
        try {
          const username = this.form.get('username').value;
          const password = this.form.get('password').value;
          let usuario:  User = {correo:username, password: password};
          this.authService.login(usuario).subscribe(userResponse => {
            localStorage.setItem("usuario",JSON.stringify(userResponse));
            this.router.navigate(['/'])
          });
         
        } catch (err) {
          console.log(err);
          this.loginInvalid = true;
        }
      } else {
        this.formSubmitAttempt = true;
      }
    }
 }



