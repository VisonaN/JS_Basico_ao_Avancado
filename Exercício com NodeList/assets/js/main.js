const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
// Pegando os estilos computados que o navegador computou do CSS do body

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody; // Colocando a cor de fundo do body nos parágrafos
    p.style.color = 'white'; // Colocando a cor branca no texto dos parágrafos
}

