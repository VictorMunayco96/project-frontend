import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDetalleVenta, IVenta } from './interfaces/sales.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  URLApi: string = environment.urlApi;

  constructor( private httpClient: HttpClient) { }

  findByFecha(date: string):Observable<IVenta> {
    return this.httpClient.get<IVenta>(`${this.URLApi}venta/findByFecha/${date}`);
  }

  findById(idVenta: string):Observable<IDetalleVenta[]> {
    return this.httpClient.get<IDetalleVenta[]>(`${this.URLApi}venta/findById/${idVenta}`);
  }
}
