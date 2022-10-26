import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuePageRoutingModule } from './value-routing.module';

import { ValuePage } from './value.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuePageRoutingModule
  ],
  declarations: [ValuePage]
})
export class ValuePageModule {}
