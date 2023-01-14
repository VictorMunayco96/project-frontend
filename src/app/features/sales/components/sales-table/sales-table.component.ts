import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss']
})
export class SalesTableComponent {

  @Input() values: any[] = [];

  @Input() cols: any[] = [];

  @Output() action = new EventEmitter<any>();

  runEvent(data: any, event: any): void {
    const rowData = { data, event };
    this.action.emit(rowData);
  }
}
