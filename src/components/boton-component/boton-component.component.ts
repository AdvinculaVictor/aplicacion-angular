import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-component',
  standalone: true,
  imports: [],
  templateUrl: './boton-component.component.html',
  styleUrl: './boton-component.component.css'
})
export class BotonComponentComponent {
  textoBoton = 'Presioname papi!';
}
