import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMovimentacaoEstoqueComponent } from './relatorio-movimentacao-estoque.component';

describe('RelatorioMovimentacaoEstoqueComponent', () => {
  let component: RelatorioMovimentacaoEstoqueComponent;
  let fixture: ComponentFixture<RelatorioMovimentacaoEstoqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioMovimentacaoEstoqueComponent]
    });
    fixture = TestBed.createComponent(RelatorioMovimentacaoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
