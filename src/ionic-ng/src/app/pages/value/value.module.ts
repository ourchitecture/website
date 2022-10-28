import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuePageRoutingModule } from './value-routing.module';

import { FooterComponentModule } from '../../components/page/footer/footer.module';

import { ValuePage } from './value.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuePageRoutingModule,
    FooterComponentModule,
  ],
  declarations: [ValuePage]
})
export class ValuePageModule {}
