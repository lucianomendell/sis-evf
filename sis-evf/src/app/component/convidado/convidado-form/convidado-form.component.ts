import { Convidado } from './../../../model/convidado';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConvidadoServiceService } from 'src/app/services/convidado-service.service';

@Component({
  selector: 'app-convidado-form',
  templateUrl: './convidado-form.component.html',
  styleUrls: ['./convidado-form.component.css'],
})
export class ConvidadoFormComponent implements OnInit {
  convidado!: Convidado;
  convidados: Convidado[];

  formConvidado = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
    ]),
    endereco: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    ]),

    faixaEtaria: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private convidadoService: ConvidadoServiceService
  ) {
    this.convidados = [];
  }

  ngOnInit(): void {
    this.getAll();

    /*this.convidadoService.getById(1).then((u) => {

    });*/

    /*
    let convidado = new Convidado();

    convidado.id = 3;
    convidado.nome = ' Júnior Sousa';
    convidado.endereco = ' Ceilândia Sil';
    convidado.telefone = '(61) 888-101010';
    (convidado.nome = 'juniorSouza@hotmail.com'),
      (convidado.faixaEtaria = 'Velho');

    this.convidadoService.save(convidado);*/
  }

  get f() {
    return this.formConvidado.controls;
  }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  onSelectChange(event: Event) {
    this.formConvidado.patchValue({
      ativo: (event.target as HTMLInputElement).value,
    });
  }

  submit() {
    if (!this.formConvidado.get('nome')?.hasError('required')) {
      let convidado = new Convidado();

      convidado.nome = this.formConvidado.value.nome;
      convidado.endereco = this.formConvidado.value.endereco;
      convidado.telefone = this.formConvidado.value.telefone;
      convidado.email = this.formConvidado.value.email;
      convidado.faixaEtaria = this.formConvidado.value.faixaEtaria;

      this.convidadoService
        .save(convidado)
        .then((convidado) => {})
        .catch((e) => {
          console.log('Erro ');
        })
        .finally(() => {});

      this.router.navigate(['listar']);
    }
  }

  getAll(): void {
    this.convidadoService.getAll().then((resposta) => {
      resposta?.forEach((element) => {
        this.convidados.push(element);
      });
    });
  }
}
