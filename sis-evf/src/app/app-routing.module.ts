import { ListarConvidadosComponent } from './component/convidado/listar-convidados/listar-convidados.component';
import { ConvidadoFormComponent } from './component/convidado/convidado-form/convidado-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'convidado',
    component: ConvidadoFormComponent,
  },
  {
    path: 'listar',
    component: ListarConvidadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
