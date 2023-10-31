// Escreva uma função que recebe dois números e retorne o maior deles

function maior(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(maior(1, 2)) // Retorna o y = 2
console.log('########################');

// MELHORIAS NO CÓDIGO DA FUNÇÃO

function maior1(x, y) {
    if (x > y) {
        return x;
    }
    return y;
}

console.log(maior1(10, 2)); // Retorna o x = 10

console.log('########################');

// Sempre que tem um bloco if com uma condição (uma linha) e que o if seja pequeno pode eliminar as chaves e fazer tudo em uma linha só, diminuindo o código e mantendo um código legível

function maior2(x, y) {
    if (x > y) return x;
    return y;
}

console.log(maior2(12, 9)); // Retorna o x = 12
console.log('########################');

// fazendo a mesma coisa usando condição ternária

function maior3(x, y) {
    return x > y ? x : y;
}

console.log(maior3(12, 20)); // Retorna o y = 20

console.log('########################');

// Fazendo a mesma coisa usando arrow function

const maior4 = (x, y) => {
    return x > y ? x : y;
}

console.log(maior4(9, 80)); // Retorna o y = 80
console.log('########################');

// OU (Quando uma arrow function tem só uma linha, pode tirar as chaves e fica implícito também que quando tem só uma linha que o que tem nessa linha será retornado, tirando a necessidade de colocar a palavra return)

const maior5 = (x, y) => x > y ? x : y;

console.log(maior5(95, 8)); // Retorna o x = 95