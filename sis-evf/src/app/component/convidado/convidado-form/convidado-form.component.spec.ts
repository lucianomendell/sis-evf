import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadoFormComponent } from './convidado-form.component';

describe('ConvidadoFormComponent', () => {
  let component: ConvidadoFormComponent;
  let fixture: ComponentFixture<ConvidadoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvidadoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvidadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
