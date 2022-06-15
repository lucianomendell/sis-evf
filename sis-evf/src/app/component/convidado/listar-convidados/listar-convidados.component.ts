import { Convidado } from './../../../model/convidado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-convidados',
  templateUrl: './listar-convidados.component.html',
  styleUrls: ['./listar-convidados.component.css'],
})
export class ListarConvidadosComponent implements OnInit {
  convidados: Convidado[];

  constructor() {
    this.convidados = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    if (localStorage.getItem('convidado')) {
      this.convidados = JSON.parse(localStorage.getItem('convidado')!);
    } else {
      this.convidados = [];
    }
  }

  onClickItem(t: any) {
    // this.router.navigate(['detalhes', t?.nome]);
  }
}
