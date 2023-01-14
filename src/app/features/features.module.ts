import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { SalesModalFormComponent } from './sales/components/sales-modal-form/sales-modal-form.component';
import { SharedModule } from '../shared/shared.module';
import { SalesTableComponent } from './sales/components/sales-table/sales-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SalesComponent,
    SalesModalFormComponent,
    SalesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    SalesComponent
  ],
  providers: [
    DatePipe
  ]
})
export class FeaturesModule { }
