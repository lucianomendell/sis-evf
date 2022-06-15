import { Convidado } from './../../../model/convidado';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.convidados = [];
  }

  ngOnInit(): void {
    this.getAll();
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
      this.formConvidado.value.id = String(Math.round(Math.random() * 100));
      const convidado: Convidado = this.formConvidado.value;
      this.convidados.push(convidado);

      localStorage.setItem('convidado', JSON.stringify(this.convidados));
      this.router.navigate(['listar']);
      this.formConvidado.reset();
    }
  }

  getAll(): void {
    if (localStorage.getItem('convidado')) {
      this.convidados = JSON.parse(localStorage.getItem('convidado')!);
    } else {
      this.convidados = [];
    }
  }
}
