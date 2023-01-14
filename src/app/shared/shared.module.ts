import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
