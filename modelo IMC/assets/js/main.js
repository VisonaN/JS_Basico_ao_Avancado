// e.target => vai informar o elemento que está recebendo o evento

// Capturar evento de submit do formulário
const form = document.querySelector('#form'); // Pegar o submit do formulário para parar o envio

form.addEventListener('submit', function(e) { // Capturando o click
// Função anônima para parar o envio do form
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    // Se o peso for inválido vai mostrar essa mensagem ao invés de fazer toda uma checagem para ver se é valido ou não
    if (!peso) {
        setRes('Peso inválido!', false);
        return; // Não pode esquecer de colocar o return se não a função não para
    }

    if (!altura) {
        setRes('Altura inválida!', false);
        return; // Não pode esquecer de colocar o return se não a função não para
    }

    const imc = getImc(peso, altura);
    const tabela = getTabelaImc(imc);
    
    const msg = `Seu IMC é ${imc} (${tabela}).`;

    setRes(msg, true);
});
/*
Literalmente assim que a return é usada, não adiantar ter else if pois a função vai ser parada assim que foi satisfeita a condição:

function getTabelaImc(imc) {
    const tabela = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc >= 39.9) {
        return tabela[5];
    } else if (imc >= 34.9) {
        return tabela[4];
    } else if (imc >= 29.9) {
        return tabela[3];
    } else if (imc >= 24.9) {
        return tabela[2];
    } else if (imc >= 18.5) {
        return tabela[1];
    } else if (imc < 18.5) {
        return tabela[0]
    }
}
Da forma abaixo vai ser executada cada parte do código de acordo com a condição
Se tem só uma linha de código no bloco do if não precisa das {} e pode colocar o código todo em uma linha ou em uma linha abaixo:

    if(imc >= 39.9) {                 forma mais formal de fazer
        return tabela[5];
    }

=> if(imc >= 39.9)
    return tabela[5];

=> if(imc >= 39.9) return tabela[5];

*/
function getTabelaImc(imc) {
    const tabela = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if(imc >= 39.9) return tabela[5];    
    if (imc >= 34.9) return tabela[4];    
    if (imc >= 29.9) return tabela[3];    
    if (imc >= 24.9) return tabela[2];    
    if (imc >= 18.5) return tabela[1];    
    if (imc < 18.5) return tabela[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
// Função que cria o parágrafo
function criaP () {
    const p = document.createElement('p');
    return p;
//    p.classList.add(className);  Adicionando uma classe no parágrafo pelo JS
}

// Função que a funcionalidade é colocar uma html dentro da div res
function setRes (msg, isValid) {
    const res = document.querySelector('#res');
    res.innerHTML = '';
    
    const p = criaP();

    if(isValid) {
        p.classList.add('p-res')
    } else {
        p.classList.add('p-res-not')
    }
    p.innerHTML = msg;
    res.appendChild(p) // appendChild insere um elemento, nesse caso na const res
}