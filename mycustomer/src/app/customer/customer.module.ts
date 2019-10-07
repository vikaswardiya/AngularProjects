import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import {routes} from './customer.routing';
import { RouterModule } from '@angular/router';
import { BookformComponent } from './bookform/bookform.component';
import { MaterialModule } from '../material';
//import { BookingFormComponent } from './booking-form/booking-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookinglistComponent, BookformComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ],
})
export class CustomerModule { }
