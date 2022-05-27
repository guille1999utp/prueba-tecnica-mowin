import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/interfaces/Heroe';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() datos: Heroe;

  link:string;
  constructor() {
    this.datos = {
      nombre:"",
      aparicion:"",
      compania: "",
      personaje: "",
      routeImagen:""
    };

    this.link = `/producto/${this.datos.nombre}`
   }

  ngOnInit(): void {
  }

}
