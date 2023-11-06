// Escopo Léxico => A função conhece o local onde foi declarada, tudo que está declarado dentro dela e o que está nos vizinhos dela

const nome = 'Paulo'; // const nome está no escopo global

function falaNome() {
    // const nome = 'Visoná' // Nesse caso o console.log(nome) vai primeiro buscar a variavel nome dentro da função e como vai achar ela dentro da função não vai mais usar a const nome do escopo global e sim dentro do escopo da função falaNome() 
    console.log(nome); // Pode de dentro da função acessar os vizinhos dela (Qualquer variável que foi criada junto à função)
}

falaNome();

function usaFalaNome() { // A função continua lembrando onde ela estava declarada e o que estava declarado dentro dela quando ela foi declarada
    const nome = 'Visoná' // Nesse caso não vai mudar pra visoná pois a função continua lembrando o que foi declarado quando ela foi criada, e aqui dentro da função usaFalaNome() quando eu coloco falaNome ela não está sendo redeclarada e sim sendo chamada para ser executada dentro da nova função, por isso a const nome não vai mudar de valor
    falaNome();
}
usaFalaNome();