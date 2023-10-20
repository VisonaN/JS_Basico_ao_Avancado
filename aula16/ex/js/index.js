const numero = Number(prompt('Digite um número'));
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');
const inteiro = window.document.getElementById('inteiro');
const nan = window.document.getElementById('nan');
const cima = window.document.getElementById('cima');
const baixo = window.document.getElementById('baixo');
const dec = window.document.getElementById('dec');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
inteiro.innerHTML = `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
nan.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}</p>`;
cima.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
baixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
dec.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`