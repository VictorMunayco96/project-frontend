import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IVenta } from 'src/app/core/interfaces/sales.interface';
import { SalesService } from 'src/app/core/sales.service';
import { SalesModalFormComponent } from './components/sales-modal-form/sales-modal-form.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  cols: any[] = [];

  constructor(
    private salesService: SalesService,
    private datePipe: DatePipe
  ) { }

  sales: any = [];
  date = new FormControl(new Date('02-01-2023'));
  isOpenModal: boolean = false;

  @ViewChild('modal') modal!: SalesModalFormComponent;

  ngOnInit(): void {
    this.buildTable();
  }

  getSalesForDate(): void {
    const dateSelected = this.datePipe.transform(this.date.value, 'yyyy-MM-dd', 'GMT', 'en-US') || '';
    this.salesService.findByFecha(dateSelected).subscribe((response) => {
      this.sales = response;
      this.sales.forEach((res: IVenta) => {
        const sale = res.venta;
        sale['datosCliente'] = `${sale.cliente.nombres} ${sale.cliente.apellidos}`
      });


      this.sales.forEach((res: IVenta) => {
        const sale = res;
        let totalPrice = 0;

        const detailSale = res.detalleVentaList;

        detailSale.forEach((resp) => {
          const subTotal = resp.producto.precio * resp.cantidad;
          totalPrice = subTotal + totalPrice
        });

        sale['total'] = totalPrice;
      });
    });
  }

  getDetailSale(id: string): void {
    this.salesService.findById(id).subscribe((response) => {
      this.modal.detailItem = response;
      this.modal.setValueDetail();
    });
  }


  openModalDetail(data: any): void {
    const { id } = data.data.venta;
    this.getDetailSale(id);
    this.modal.isOpenModal = true;
    this.modal.header = 'Detalle de venta';
  }

  buildTable(): void {
    this.cols = [
      { field: 'venta', subField: 'datosCliente', header: 'Cliente' },
      { field: 'venta', subField: 'fecha', header: 'Fecha' },
      { field: 'total', header: 'Total' },
      { field: 'optionDetail', header: 'Ver detalle' }
    ];
  }
}
