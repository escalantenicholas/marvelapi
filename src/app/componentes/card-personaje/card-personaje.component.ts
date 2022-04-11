import { Component, Input} from '@angular/core';
import { Personaje } from 'src/app/modelos/personaje';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent {

  @Input() personaje!: Personaje;

  constructor() { }

  

}
