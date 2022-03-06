import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    RadioComponent,
    CheckboxComponent,
    AutocompleteComponent,
    DatepickerComponent,
    SlideToggleComponent,
    TabsComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
