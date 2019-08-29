import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 *Service to fetch random user
 *
 * @export
 * @class UserService
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private _http: HttpClient) { }

  /**
   *Calls random user api
   *
   * @returns {Observable<any>}
   * @memberof UserService
   */
  public getRandomUser(): Observable<any> {

    const url = environment.MEMBER_URL;

    return this._http.get(url);
  }

}


