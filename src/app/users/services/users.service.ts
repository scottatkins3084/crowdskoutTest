import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    const url = 'https://jsonplaceholder.typicode.com/users/';

    return this.http.get<UserModel[]>(url);
  }
}
