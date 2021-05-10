import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarEditarComponent } from './modal-agregar-editar.component';

describe('ModalAgregarEditarComponent', () => {
  let component: ModalAgregarEditarComponent;
  let fixture: ComponentFixture<ModalAgregarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
