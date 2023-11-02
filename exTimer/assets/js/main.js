function relogio() {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    //console.log(getTimeFromSeconds(10))
    /* COM O DOCUMENT.ADDEVENTLISTENER('CLICK', FUNCTION(E)) NÃO PRECISA MAIS SELECIONAR OS BOTÕES COMO ABAIXO
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    */
    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;

    function startClock() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const element = e.target;

        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startClock();
        }

        if (element.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (element.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;
            relogio.classList.remove('pausado');
        }
    })
}

relogio();
// ENVELOPEI O CÓDIGO INTEIRO PARA QUE NÃO CAIA NO ESCOPO GLOBAL E NO FINAL CHAMEI A FUNÇÃO PARA FUNCIONAR

// acima tem uma forma de fazer a mesma coisa de baixo mas com menos eventListener
/*
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    startClock();
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
    relogio.classList.remove('pausado');
});
*/
