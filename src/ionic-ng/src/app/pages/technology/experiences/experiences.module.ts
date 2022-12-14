import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencesPageRoutingModule } from './experiences-routing.module';

import { FooterComponentModule } from '../../../components/page/footer/footer.module';

import { ExperiencesPage } from './experiences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperiencesPageRoutingModule,
    FooterComponentModule,
  ],
  declarations: [ExperiencesPage]
})
export class ExperiencesPageModule {}
