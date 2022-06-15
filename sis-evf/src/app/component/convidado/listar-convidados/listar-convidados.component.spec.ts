import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConvidadosComponent } from './listar-convidados.component';

describe('ListarConvidadosComponent', () => {
  let component: ListarConvidadosComponent;
  let fixture: ComponentFixture<ListarConvidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConvidadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConvidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
