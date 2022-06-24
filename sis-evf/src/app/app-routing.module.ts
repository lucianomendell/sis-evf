import { DetalhesConvidadoComponent } from './component/convidado/detalhes-convidado/detalhes-convidado.component';
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
  {
    path: 'detalhes/:id',
    component: DetalhesConvidadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
