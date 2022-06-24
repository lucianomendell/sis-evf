import { Router } from '@angular/router';
import { ConvidadoServiceService } from 'src/app/services/convidado-service.service';
import { Convidado } from './../../../model/convidado';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listar-convidados',
  templateUrl: './listar-convidados.component.html',
  styleUrls: ['./listar-convidados.component.css'],
})
export class ListarConvidadosComponent implements OnInit {
  @Output() mensagemPai!: string; //Componete Pai
  convidados: Convidado[];
  exibirMensagem: boolean = true;

  constructor(
    private convidadoService: ConvidadoServiceService,
    private router: Router
  ) {
    this.convidados = [];
  }

  ngOnInit(): void {
    this.getAll();
  }

  onClickItem(t: any) {}

  novoCadastro() {
    this.router.navigate(['convidado']);
  }

  deleter(t: any) {
    this.convidadoService.deletar(t.id).subscribe(
      (res) => {
        alert('Registro Deletado');
        this.getAll();
      },
      (err) => {
        alert('Erro ao tentar Gravar');
      }
    );
    this.mensagemPai = `O Convidado ${t.nome}`;
  }
  editar() {}

  detalhes(t: any) {
    this.router.navigate(['detalhes', t?.id]);
  }

  getAll(): void {
    this.convidadoService.getAll().subscribe(
      (res: Convidado[]) => {
        if (!res || res.length == 0) {
          this.convidados = res;
          this.exibirMensagem = true;
          return;
        }
        this.convidados = res;
        this.exibirMensagem = false;
      },
      (error) => {
        alert(error.message);
      }
    );
  }
}
