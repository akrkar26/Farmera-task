import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

/**
 * Home page of the app
 *
 * @export
 * @class HomePage
 */
@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  private _userList = [];
  private _showTeam = false;

  constructor(private _service: UserService) {

    this._getRandomUser();
  }

  /**
   *Fetches random user from random api
   *
   * @private
   * @memberof HomePage
   */
  private _getRandomUser() {

    this._service.getRandomUser().subscribe((users) => {
      if (users) {
        const members = users.results;
        members.forEach((member, index) => {
          member.lastCheckedIn = index + 1;
        });
        this._userList = members;
      }
    });
  }

  /**
   *Output event handler to toggle chevron icon
   *
   * @private
   * @param {*} event
   * @memberof HomePage
   */
  private _showteamMembers(event) {
    this._showTeam = event;
  }
}
