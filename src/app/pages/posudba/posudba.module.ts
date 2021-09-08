import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosudbaPageRoutingModule } from './posudba-routing.module';

import { PosudbaPage } from './posudba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosudbaPageRoutingModule
  ],
  declarations: [PosudbaPage]
})
export class PosudbaPageModule {}
