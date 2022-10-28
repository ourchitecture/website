import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologyPageRoutingModule } from './technology-routing.module';

import { FooterComponentModule } from '../../components/page/footer/footer.module';

import { TechnologyPage } from './technology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologyPageRoutingModule,
    FooterComponentModule,
  ],
  declarations: [TechnologyPage]
})
export class TechnologyPageModule {}
