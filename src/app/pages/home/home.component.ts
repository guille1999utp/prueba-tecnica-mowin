import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from 'src/app/service/base-datos.service';
import { Meta,Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public heroes:BaseDatosService,
              private meta: Meta,
              private title:Title) {
                this.meta.addTags([
                  { name: 'description', content: 'encontraras todos los heroes disponibles' },
                ]);
                title.setTitle("home");
               }

  ngOnInit(): void {
  }

}
