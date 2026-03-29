import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoEstoqueComponent } from './movimentacao-estoque.component';

describe('MovimentacaoEstoqueComponent', () => {
  let component: MovimentacaoEstoqueComponent;
  let fixture: ComponentFixture<MovimentacaoEstoqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentacaoEstoqueComponent]
    });
    fixture = TestBed.createComponent(MovimentacaoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
