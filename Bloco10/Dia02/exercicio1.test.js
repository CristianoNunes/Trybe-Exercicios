const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it(`Verificando se passado 'cristiano' é retornado 'CRISTIANO'`, (done) => {
  uppercase('cristiano', (str) => {
    expect(str).toBe('CRISTIANO');
    done();
  });
});
