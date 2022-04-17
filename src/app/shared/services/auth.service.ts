import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from './api.service';
import Swal from 'sweetalert2';

declare var $: any;

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public router: Router,
    public apiService: ApiService
  ) {}

  authLogin(loginObj) {
    const btn = $('#login');
    btn.html('<i class="fa fa-spinner fa-spin"></i> Acessando...');

    this.apiService.authLogin(loginObj).subscribe((res) => {

      localStorage.setItem('authToken', res['result'][0]['token']);
      localStorage.setItem('expirationToken', res['result'][0]['expiration']);
      localStorage.setItem('userToken', JSON.stringify(res['result'][0]['user']));
      
      btn.html('<i class="fas fa-sign-in"></i> Acessar');
      this.router.navigate(['dashboard']);
    },
    error => {
      btn.html('<i class="fas fa-sign-in"></i> Acessar');

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: error.error.message,
        showConfirmButton: false,
        timer: 4000
      });
  });
  }

  authLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('expirationToken');
    localStorage.removeItem('userToken');

    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const tokenDate =  new Date(localStorage.getItem('expirationToken') || new Date());
    const authToken = localStorage.getItem('authToken') || 'null';

    return (authToken !== null && tokenDate > new Date()) ? true : false;
  }

}