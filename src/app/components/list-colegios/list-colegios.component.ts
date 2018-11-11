import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-list-colegios',
  templateUrl: './list-colegios.component.html',
  styleUrls: ['./list-colegios.component.css']
})
export class ListColegiosComponent implements OnInit {
  colegios: any;
  constructor(private _conexion: ConexionService) {
    this._conexion.listaColegios().subscribe(data => {
      this.colegios = data;
      console.log(this.colegios);
    })
  }

  ngOnInit() {
  }

}
