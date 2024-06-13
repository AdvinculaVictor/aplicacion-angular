import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Observable,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isUserLoggedIn:Subject<boolean> = new Subject<boolean>();
  private urlApi = 'https://api.escuelajs.co/api/v1/products';
  private urlApiAdProduct = 'https://advinculaproductapi.azurewebsites.net/Product';
  private urlApiAdCustomer = 'https://advinculacustomerapi.azurewebsites.net/Customer';
  private urlApiAdOrder = 'https://advinculaorderapi.azurewebsites.net/Order';
  private urlApiAd:string = '';

  constructor(private httpClient: HttpClient) { }

  public getData():Observable<any>{
    return this.httpClient.get<any>(this.urlApi);
  }

  public getDataAD(opcion:string=''):Observable<any>{
    switch (opcion) {
      case 'productos':
        this.urlApiAd = this.urlApiAdProduct;
        console.log(this.urlApiAdProduct);
        break;
      case 'clientes':
        this.urlApiAd = this.urlApiAdCustomer;
        break;
        case 'ordenes':
          this.urlApiAd = this.urlApiAdOrder;
          break;
        default:
          break;
    }
    return this.httpClient.get<any>(this.urlApiAd);
  }
}
