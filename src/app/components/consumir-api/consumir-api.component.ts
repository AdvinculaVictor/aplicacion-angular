import { Component } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consumir-api',
  templateUrl: './consumir-api.component.html',
  styleUrls: ['./consumir-api.component.scss']
})
export class ConsumirApiComponent {
  public data:any[]=[];

  constructor(private apiScv:ApiService){
    this.llenarDatos();
  }

  llenarDatos(){
    this.apiScv.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    })
}
}
