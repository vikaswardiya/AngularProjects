import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewExpenceComponent } from './add-new-expence/add-new-expence.component';
import { UserTableComponent } from './user-table/user-table.component';
import {ServicesService} from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    AddNewExpenceComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
