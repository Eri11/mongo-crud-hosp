import { Component, OnInit } from '@angular/core';
import { Hospital } from './model/hospital';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  index: number = 1;

  hospitales:  Hospital[] = [];



  constructor() { }

  ngOnInit(): void {
    //Agregar elementos al arreglo para mostrarlos en una vista(HTML)

    this.hospitales = [
      { id: this.index++, site: 'Star Medica Aguascalientes', responsable: 'Dra. Norma Leticia Padilla Flores', telefono: '449-910-9900'},
      { id: this.index++, site: 'Star Medica Chihuahua', responsable: 'Dr. Gerardo Velo Mendez', telefono: '614-432-6600'},
      { id: this.index++, site: 'Star Medica Cd. Juarez', responsable: 'Dr. Eliu Hernández Muñoz', telefono: '656-227-5700'},
      { id: this.index++, site: 'Star Medica Morelia', responsable: '-', telefono: '443-322-7700'},
      { id: this.index++, site: 'Star Medica Veracruz', responsable: 'Dra. Adalyd Rivas Hernandez', telefono: '229-276-2200'},
    ];
  }

}
