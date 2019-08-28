import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
    selector: 'header-details',
    templateUrl: 'header-details.component.html',
    styleUrls: ['header-details.style.scss']
})
export class HeaderDetailsComponent {

    constructor(private _alertSheetCtrl: ActionSheetController, private _router: Router) { }

    private async _managePigs() {

        const actionSheet = await this._alertSheetCtrl.create({
            header: 'Manage Pigs',
            buttons: [{
                text: 'Add pigs',
                handler: () => {
                    console.log('Add pigs clicked');
                }
            }, {
                text: 'Move pigs',
                handler: () => {
                    console.log('Move pigs clicked');
                }
            }, {
                text: 'Sale pigs',
                handler: () => {
                    console.log('Sale pigs clicked');
                }
            }]
        });

        await actionSheet.present();
    }

}
