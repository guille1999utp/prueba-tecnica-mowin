import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/Heroe';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  bd: Heroe[] = [
    {
      nombre:"Superman",
      compania:"DC Comics",
      aparicion: "Superman Comics #1",
      personaje: "Kal-el",
      routeImagen: "./assets/HD-wallpaper-superman-dc-premium-superheroes.jpg"
    },
    {
      nombre:"Flash",
     compania:"DC Comics",
     aparicion: "Flash Comics #1",
     personaje: "Barry Allen",
     routeImagen: "./assets/The-Flash-Wallpaper.jpg"
   },
   {
    nombre:"Batman",
     compania:"DC Comics",
     aparicion: "Detective Comics #27",
     personaje: "Bruce Wayne",
     routeImagen: "./assets/HD-wallpaper-batman-batman-vs-superman-el-caballero-de-la-noche.jpg"
   },
   {
    nombre:"Linterna Verde",
     compania:"DC Comics",
     aparicion: "All-American Comics #16",
     personaje: "Alan Scott",
     routeImagen: "./assets/Linterna-verde.webp"
   }
  ];

   getHeroe(heroeHallar:string){
    return this.bd.find((heroe)=> heroe.nombre === heroeHallar);
  }
  constructor() { }
}
