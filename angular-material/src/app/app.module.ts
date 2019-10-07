import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { TableComponentComponent } from './table-component/table-component.component';
import { TableService } from './table.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ApiTableComponent } from './api-table/api-table.component';
import {HttpClientModule} from '@angular/common/http';
import {UserModule} from './user/user.module'
@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    SidenavComponent,
    ApiTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    MaterialModule ,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
