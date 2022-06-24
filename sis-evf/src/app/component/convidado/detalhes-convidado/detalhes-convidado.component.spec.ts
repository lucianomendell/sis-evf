import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesConvidadoComponent } from './detalhes-convidado.component';

describe('DetalhesConvidadoComponent', () => {
  let component: DetalhesConvidadoComponent;
  let fixture: ComponentFixture<DetalhesConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesConvidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
