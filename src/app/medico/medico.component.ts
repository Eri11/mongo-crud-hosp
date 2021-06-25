import { Component, OnInit } from '@angular/core';
import { Medico } from './model/medico';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})

export class MedicoComponent implements OnInit {

  index: number = 1;

  medicos: Medico[] = [];

  constructor() { }

  ngOnInit(): void {
    //Agregar elementos al arreglo para mostrarlos en una vista(HTML)

    this.medicos = [
      { id: this.index++, nombre: 'Abraham Lopez Alvarez', especialidad: 'Urologia', hospital: 'Star Medica Aguascalientes', consultorio: '129', telefono: '449-971-8263', cedProf: '4965339' },
      { id: this.index++, nombre: 'Abraham Rosas Chavez', especialidad: 'Ginecologia y Obstetricia', hospital: 'Star Medica Aguascalientes', consultorio: '431', telefono: '449-153-3188', cedProf: '3766914' },
      { id: this.index++, nombre: 'Adan Tabarez Ortiz', especialidad: 'Ginecologia y Obstetricia', hospital: 'Star Medica Aguascalientes', consultorio: '313', telefono: '449-978-6898', cedProf: '3441659' },
      { id: this.index++, nombre: 'Carlos De Alba De Lira', especialidad: 'Pediatria', hospital: 'Star Medica Aguascalientes', consultorio: '322', telefono: '614-210-6055', cedProf: '6786338' },
      { id: this.index++, nombre: 'Carlos Casillas Ibarra', especialidad: 'Otorrinolaringologia y Cirugia Maxilofacial', hospital: 'Star Medica Aguascalientes', consultorio: 'PB2', telefono: '449-153-0127', cedProf: '4094698' },
      { id: this.index++, nombre: 'Carmen Orozco Gonzalez', especialidad: 'Geriatria', hospital: 'Star Medica Aguascalientes', consultorio: '228', telefono: '449-153-1312', cedProf: '1129739' },
      { id: this.index++, nombre: 'Eleazar Juarez Alamillo', especialidad: 'Urologia', hospital: 'Star Medica Aguascalientes', consultorio: '108', telefono: '449-914-1818', cedProf: '1076932' },
      { id: this.index++, nombre: 'Fernando Longueira Rosales', especialidad: 'Gastroenterologia', hospital: 'Star Medica Aguascalientes', consultorio: '421', telefono: '449-993-2093', cedProf: '1513921' },
      { id: this.index++, nombre: 'Jorge Gonzalez Nieto', especialidad: 'Pediatria', hospital: 'Star Medica Aguascalientes', consultorio: '223', telefono: '449-153-0362', cedProf: '5483943' },
      { id: this.index++, nombre: 'Maria Martinez Gigena', especialidad: 'Pediatria', hospital: 'Star Medica Aguascalientes', consultorio: '419', telefono: '449-916-5205', cedProf: '2060256' },
      { id: this.index++, nombre: 'Mariela Cardiel Silva', especialidad: 'Hematologia', hospital: 'Star Medica Aguascalientes', consultorio: '418', telefono: '449-912-3078', cedProf: '3465674' },
      { id: this.index++, nombre: 'Sergio Alatorre Perez', especialidad: 'Cirugia Oral y Maxilofacial', hospital: 'Star Medica Aguascalientes', consultorio: '113', telefono: '449-153-2359', cedProf: '3442315' },
      { id: this.index++, nombre: 'Virginia Ibarra Pedroza', especialidad: 'Nefrologia', hospital: 'Star Medica Aguascalientes', consultorio: '432', telefono: '449-978-5727', cedProf: '5931940' },
      { id: this.index++, nombre: 'Aaron Saenz Robinson', especialidad: 'Psiquiatria', hospital: 'Star Medica Chihuahua', consultorio: '1101', telefono: '614-430-3003, 614-147-0468', cedProf: '4365591' },
      { id: this.index++, nombre: 'Abdon Limas Juarez', especialidad: 'Radiodiagnostico', hospital: 'Star Medica Chihuahua', consultorio: '714', telefono: '614-415-3492', cedProf: '3256140' },

    ];


  }

}
