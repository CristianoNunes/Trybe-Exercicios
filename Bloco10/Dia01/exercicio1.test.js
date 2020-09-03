const sum = require('./exercicio1');

describe('sum', () => {
  it('Deve retornar 9 ao receber 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Deve retornar um erro quando é passado String', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('Deve retornar 0 quando for passado 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Deve retornar a msg de error "Os parâmetros não são números"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/Os parâmetros não são números/);
  });
});