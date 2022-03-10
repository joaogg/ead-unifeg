import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj = {
    username: '',
    password: ''
  };

  constructor(
    private apiService: ApiService,
    private authService: AuthService,    
  ) { }

  ngOnInit(): void {
    this.getUsers();


  }

  getUsers(): void {
    this.apiService.getUsers().subscribe((res) => {

      console.log('res = ', res);
    });
  }

  login(): void {
    console.log('this.loginObj = ', this.loginObj);
    this.authService.authLogin(this.loginObj);
  }

}
