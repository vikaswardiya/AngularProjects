import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCheckboxModule, MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { CheckboxConfigurableExampleComponent } from './checkbox-configurable-example/checkbox-configurable-example.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxConfigurableExampleComponent
  ],
  imports: [
    BrowserModule , BrowserAnimationsModule ,MatCheckboxModule ,MatRadioModule ,MatCardModule ,MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
