import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IDetalleVentaList } from 'src/app/core/interfaces/sales.interface';

@Component({
  selector: 'app-sales-modal-form',
  templateUrl: './sales-modal-form.component.html',
  styleUrls: ['./sales-modal-form.component.scss']
})
export class SalesModalFormComponent implements OnInit {
  @Input() isOpenModal: boolean = false;
  cols: any[] = [];
  header: string = '';
  detailItem: any;
  values: any;
  total: number = 0;

  constructor(
    private fb: FormBuilder,
  ) { }

  saleDetail = this.fb.group({
    names: [{ value: null, disabled: true }],
    lastName: [{ value: null, disabled: true }],
    dni: [{ value: null, disabled: true }],
    phoneNumber: [{ value: null, disabled: true }],
    email: [{ value: null, disabled: true }],
    date: [{ value: null, disabled: true }],
  });

  ngOnInit(): void {
    this.buildTable();
  }


  setValueDetail(): void {
    const { venta, detalleVentaList } = this.detailItem;
    const { fecha, cliente } = venta;
    const { nombres, apellidos, dni, telefono, email } = cliente;

    this.saleDetail.patchValue({
      names: nombres,
      lastName: apellidos,
      dni: dni,
      phoneNumber: telefono,
      email: email,
      date: fecha
    });

    this.values = detalleVentaList;

    let totalPrice = 0;
    this.values.forEach((resp: IDetalleVentaList) => {
      const subTotal = resp.producto.precio * resp.cantidad;
      totalPrice = subTotal + totalPrice
      resp['subTotal'] = subTotal;
    });

    this.total = totalPrice;

  }


  buildTable(): void {
    this.cols = [
      { field: 'producto', subField: 'nombre', header: 'Producto' },
      { field: 'producto', subField: 'precio', header: 'Precio unitario' },
      { field: 'cantidad', subField: '', header: 'Cantidad' },
      { field: 'subTotal', subField: '', header: 'Subtotal' }
    ];
  }

  closeModal(): void {
    this.isOpenModal = false;
  }

}
