import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapabilitiesPageRoutingModule } from './capabilities-routing.module';

import { FooterComponentModule } from '../../../components/page/footer/footer.module';

import { CapabilitiesPage } from './capabilities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapabilitiesPageRoutingModule,
    FooterComponentModule,
  ],
  declarations: [CapabilitiesPage]
})
export class CapabilitiesPageModule {}
