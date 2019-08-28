import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private _http: HttpClient) { }

  public getRandomUser(): Observable<any> {

    const url = environment.MEMBER_URL;

    return this._http.get(url);
  }

}


