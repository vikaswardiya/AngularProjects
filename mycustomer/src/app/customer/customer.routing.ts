import { Routes } from '@angular/router';

import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookformComponent } from './bookform/bookform.component'

export const routes: Routes = [
  { path: 'booklist', component: BookinglistComponent },
  { path: 'bookroom', component: BookformComponent }
];