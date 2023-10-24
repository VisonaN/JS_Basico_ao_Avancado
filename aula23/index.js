/*      OPERADORES LÓGICOS (Usados para checar mais de uma comparação / menos o '!' - NOT)
* && => AND => E => Todas as expressões precisam ser verdadeiras para retornar true
        const expressaoAnd = true && true && false && true; => false
        console.log(expressao);
        const usuario = 'Paulo'; // form que o user digitou
        const senha = '12345678'; // form que o user digitou
        //                            True                  False
        const vaiLogar = usuario === 'Paulo' && senha === '1234678';
        console.log(vaiLogar);

* || => OR => OU => Se uma expressão for verdadeira vai retornar true independente da posição
        const expressaoOr = false || false || true || false; => true
        console.log(expressaoOr);

* ! => NOT => NÃO => Nega a expressão
        console.log(!false); => true / E pode negar quantas vezes quiser mesmo que isso não seja usado => console.log(!!false); => false => Nega a negação de false resultando em false de novo (retornando ao valor original)
*/