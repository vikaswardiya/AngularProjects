import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActivateguardGuard } from './activateguard.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule), canActivate: [ActivateguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
