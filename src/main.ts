import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BotonComponentComponent } from './components/boton-component/boton-component.component';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'main.html',
  imports:[
    BotonComponentComponent
  ]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
