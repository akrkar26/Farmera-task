import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderDetailsComponent } from '../components/header-details/header-details.component';
import { TeamMemberComponent } from '../components/team-member/team-member.component';

import { HomePageRoutingModule } from './home.router.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderDetailsComponent, TeamMemberComponent]
})
export class HomePageModule {}
