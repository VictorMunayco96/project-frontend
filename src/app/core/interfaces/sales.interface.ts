export interface IVentaList {
  id: number;
  fecha: string;
  cliente: ICliente;
  datosCliente?: string;
}

export interface IVenta {
  detalleVentaList: IDetalleVentaList[];
  venta: IVentaList;
  total?: number;
}

export interface ICliente {
  id: number;
  nombres: string;
  apellidos: string;
  dni: string;
  telefono: string;
  email: string;
}


export interface IProducto {
  id: number;
  nombre: string;
  precio: number;
}

export interface IDetalleVentaList {
  cantidad: number;
  id: number;
  producto: IProducto;
  subTotal: number;
}

export interface IDetalleVenta {
  detalleVentaList: IDetalleVentaList[];
  venta: IVentaList;
  total?: number;
}

