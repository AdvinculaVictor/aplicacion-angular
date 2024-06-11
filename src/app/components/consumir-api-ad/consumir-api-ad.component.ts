import { Component } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consumir-api-ad',
  templateUrl: './consumir-api-ad.component.html',
  styleUrls: ['./consumir-api-ad.component.scss']
})
export class ConsumirApiADComponent {
  public data: any[] = [];
  public opciones:string[]=['productos','clientes','ordenes'];
  public opcion:string= this.opciones[0]

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.llenarDatos();
  }

  llenarDatos(){
    this.apiService.getDataAD(this.opcion).subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

  cambiar(value:string){
    this.opcion = value;
    console.log(value);
    this.llenarDatos();
  }
}
