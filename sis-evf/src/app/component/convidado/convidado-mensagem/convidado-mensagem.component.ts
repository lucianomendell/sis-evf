import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-convidado-mensagem',
  templateUrl: './convidado-mensagem.component.html',
  styleUrls: ['./convidado-mensagem.component.css'],
})
export class ConvidadoMensagemComponent implements OnInit {
  @Input() mensagemFilho!: string; // Atributo filho

  dataAtual: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
