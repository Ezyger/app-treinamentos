import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkoutSliderComponent } from '../global-components/workout-slider/workout-slider.component';
import { AppComponent } from './../app.component';
import { HomeComponent } from './home/home.component';
import { PagesPageRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [HomeComponent, WorkoutSliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PagesPageRoutingModule,
  ],
  providers: [AppComponent, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
