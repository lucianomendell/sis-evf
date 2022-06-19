import { ConvidadoServiceService } from 'src/app/services/convidado-service.service';
import { Convidado } from './../../../model/convidado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-convidados',
  templateUrl: './listar-convidados.component.html',
  styleUrls: ['./listar-convidados.component.css'],
})
export class ListarConvidadosComponent implements OnInit {
  convidados: Convidado[];

  constructor(private convidadoService: ConvidadoServiceService) {
    this.convidados = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.convidadoService.getAll().then((resposta) => {
      resposta?.forEach((element) => {
        this.convidados.push(element);
      });
    });
  }

  onClickItem(t: any) {
    // this.router.navigate(['detalhes', t?.nome]);
  }
}
