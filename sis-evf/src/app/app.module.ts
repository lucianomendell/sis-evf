import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroducaoComponent } from './component/introducao/introducao.component';
import { ConvidadoComponent } from './component/convidado/convidado.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroducaoComponent,
    ConvidadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
