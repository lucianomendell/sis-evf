import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroducaoComponent } from './component/introducao/introducao.component';
import { MenuComponent } from './component/menu/menu.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatInputModule } from '@angular/material/input';
import { ConvidadoFormComponent } from './component/convidado/convidado-form/convidado-form.component';
import { ListarConvidadosComponent } from './component/convidado/listar-convidados/listar-convidados.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalhesConvidadoComponent } from './component/convidado/detalhes-convidado/detalhes-convidado.component';
import { ConvidadoMensagemComponent } from './component/convidado/convidado-mensagem/convidado-mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    ConvidadoFormComponent,
    ListarConvidadosComponent,
    DetalhesConvidadoComponent,
    ConvidadoMensagemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false,
    }),
    BrowserAnimationsModule,
  ],
  exports: [MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
