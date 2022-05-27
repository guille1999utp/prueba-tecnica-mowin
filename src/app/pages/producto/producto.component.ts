import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';
import { BaseDatosService } from 'src/app/service/base-datos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  heroe:any = {
  };
  constructor(private _service:BaseDatosService,
              private activatedRoute:ActivatedRoute,
              private meta: Meta,
              private title:Title) {
                this.activatedRoute.params.subscribe(params=>{
                  this.heroe = this._service.getHeroe(params["heroe"]);
                  this.meta.addTags([
                    { name: 'description', content: this.heroe.compania },
                    ]);
                  title.setTitle(params["heroe"]);
                });
              
     }

  ngOnInit(): void {
  }

}
