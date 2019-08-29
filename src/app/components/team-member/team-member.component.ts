import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';


declare var window;

/**
 *Shows team members
 *
 * @export
 * @class TeamMemberComponent
 */
@Component({
    selector: 'team-member',
    templateUrl: 'team-member.component.html',
    styleUrls: ['team-member.style.scss']
})
export class TeamMemberComponent {

    @Input() private member = {} as any;
    @Input() private indexOfMember = {};
    @Input() private showTeam = false;
    @Output() private showTeamMembers = new EventEmitter<boolean>();

    constructor(private _callNumber: CallNumber, private _sms: SMS) { }

    /**
     *Output to home component to handle chevron icon
     *
     * @private
     * @param {boolean} flag
     * @memberof TeamMemberComponent
     */
    private _showAllTeamMembers(flag: boolean) {
        this.showTeamMembers.emit(flag);
    }

    /**
     *calls to the number
     *
     * @private
     * @memberof TeamMemberComponent
     */
    private _makeCall() {
        if (window.cordova) {
            this._callNumber.callNumber(this.member.cell, true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        }
    }

    /**
     *sends sms to the number
     *
     * @private
     * @memberof TeamMemberComponent
     */
    private _doMessage() {
        if (window.cordova) {
            this._sms.send(this.member.cell, 'Hello world!');
        }
    }
}
