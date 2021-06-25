import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';
import { MedicoComponent } from './medico/medico.component';

const routes: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico', component: MedicoComponent }
  //{ path: 'paciente', component: PacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
