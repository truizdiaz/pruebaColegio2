import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-add-colegios',
  templateUrl: './add-colegios.component.html',
  styleUrls: ['./add-colegios.component.css']
})
export class AddColegiosComponent implements OnInit {

  colegio: any = {
    nombre: ''
  }
  constructor(private _conexion:ConexionService) { }

  ngOnInit() {
  }

  agregar() {
    this._conexion.addColegio(this.colegio);
    this.colegio.nombre = '';
  }

}
