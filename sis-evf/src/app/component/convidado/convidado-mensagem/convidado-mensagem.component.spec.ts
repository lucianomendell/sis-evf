import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadoMensagemComponent } from './convidado-mensagem.component';

describe('ConvidadoMensagemComponent', () => {
  let component: ConvidadoMensagemComponent;
  let fixture: ComponentFixture<ConvidadoMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvidadoMensagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvidadoMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
