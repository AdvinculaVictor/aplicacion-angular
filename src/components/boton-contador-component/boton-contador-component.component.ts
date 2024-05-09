import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-contador-component',
  standalone: true,
  imports: [],
  templateUrl: './boton-contador-component.component.html',
  styleUrl: './boton-contador-component.component.css'
})
export class BotonContadorComponentComponent {
  contador = 0;
}
