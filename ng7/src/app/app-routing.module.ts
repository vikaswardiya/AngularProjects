import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//import { createEmployeeCanDeactivateGuardService } from './contact/create-contact-canDeactivate-guard.service';
import { ActivateGuard } from './activate.guard'
import { DeactivateGuard } from './deactivate.guard';
import { ViewDetailComponent } from './view-detail/view-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent, canActivate: [ActivateGuard] },
  { path: 'Contact', component: ContactComponent}, // ,canDeactivate: [DeactivateGuard] 
  { path: 'view-detail/:id', component: ViewDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
