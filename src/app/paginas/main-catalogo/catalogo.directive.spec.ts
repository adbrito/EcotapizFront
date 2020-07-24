import { CatalogoDirective } from './catalogo.directive';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

describe('CatalogoDirective', () => {
  it('should create an instance', () => {
    const directive = new CatalogoDirective(null);
    expect(directive).toBeTruthy();
  });
});
