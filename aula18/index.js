// CONST COM VALORES MUTÁVEIS

/*
    Const descreve uma variável que não pode ser reatribuida (com o operador de atribuição = ). Depois de criá-la, não podemos fazer algo assim:

    const nome = 'Luiz';
    nome = 'João'; // Dá Erro: Assignment to constant variable.
*/

/*
    Porém, existe uma diferença entre variável e valor.

    Variáveis são como um apelido para valor, uma espécie de alias para mencionar algum valor salvo na memória.
*/

/*
    Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. ALguns tipos de valores são imutáveis, como 'number', 'String', 'Boolean', 'Undefined', 'null', 'Symbol' e 'Bigint' (Os primitivos são todos imutáveis).
    Outros tipos são mutáveis, como 'Arrays' e 'Objetos' (Objetos em geral são mutáveis, com excessão de Null).
*/

/*
    Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso da array, que pode ser composto por vários outros tipos de dados.
*/

/*
    Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nessa caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante.)
*/

/*
    Já quando usamos const com valores mutáveis (como arrays e objects), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição '=' (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.
*/

/*
    Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única cosia que não vamos conseguir fazer é reatribuir o valor da variável.
*/

// EXEMPLOS:

// Isso pode =>
/*
    const array = [1, 2, 3, 4, 5];
    array.pop();
    array[0] = 1024;
    console.log(array); // [1024, 2, 3, 4]
*/
// Isso não pode =>
/*
    const array = [1, 2, 3, 4, 5];
    array = 'Legal'; // TypeError: Assignment to constant variable.
    console.log(array);
*/