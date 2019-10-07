import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(): boolean {
    return window.confirm("are you sure want to exit the page ?");
  }
}
