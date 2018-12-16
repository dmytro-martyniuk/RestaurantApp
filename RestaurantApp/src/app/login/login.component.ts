import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  loading = false;
  returnUrl: string;
  error: boolean = false;
  errorMessage:string='';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.usernameCtrl = new FormControl('', Validators.required);
    this.passwordCtrl = new FormControl('', Validators.required);
    this.loginForm = this.formBuilder.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });

    this.cookieService.delete("user");

    // get return url from route parameters or default to '/'
    this.returnUrl = '/';
  }

  onSubmit() {


    this.error = false;
    this.errorMessage= '';
    //console.log(this.usernameCtrl.value.length);
    if(this.usernameCtrl.value.length <4){
      this.error = true;
      this.errorMessage = 'Username is too short';
      
      return;
    }
    if(this.passwordCtrl.value.length <4){
      this.error = true;
      this.errorMessage = 'Password is too short';
      return;
    }

    this.loading = true;
    setTimeout( () => { this.loading = false; }, 250 );
    this.returnUrl = this.loginService.login(this.usernameCtrl.value, this.passwordCtrl.value);

    //this.loading = false;
    if (this.returnUrl == 'incorrect') {
      this.error=true;
      this.errorMessage = 'Incorrect username or password';
    } else {
      this.router.navigate([this.returnUrl]);
    }

  }

}