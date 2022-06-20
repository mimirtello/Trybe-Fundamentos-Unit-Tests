const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    expect (typeof(productDetails)).toEqual('function');// Teste se productDetails é uma função.
    expect (typeof(productDetails(1))).toEqual('object');// Teste se o retorno da função é um array.
    expect (productDetails.length).toEqual(2);  // Teste se o array retornado pela função contém dois itens dentro.
    expect (typeof productDetails()[0] && typeof productDetails()[1]).toEqual('object') // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect (productDetails('Alcool gel')).not.toEqual(productDetails('Máscara'));// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect (productDetails()[0].details.productId.slice(-3)).toEqual('123');
    expect (productDetails()[1].details.productId.slice(-3)).toEqual('123');
    
    // Teste se os dois productIds terminam com 123.
  });
});
