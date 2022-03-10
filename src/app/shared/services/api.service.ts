import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = '';

  // Rotas
  private userUrl = 'user';
  private authUrl = 'auth';

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `http://localhost:3000/`;
  }

  getUsers() {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ');
    return this.httpClient.get(this.baseUrl + this.userUrl, httpOptions);
  }

  authLogin(data) {
    //httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.httpClient.post(this.baseUrl + this.authUrl + '/login', data, httpOptions);
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
