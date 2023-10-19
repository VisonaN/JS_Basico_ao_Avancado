// Strings são indexáveis (cada caractere tem um índice) => que começa em 0 e por aí em diante

// let umaString = "Um \"texto\""; // Usar a barra invertida para escapar o caractere "" e conseguir usar ele no texto mesmo tendo aberto a string com as mesmas aspas
// console.log(umaString);
// let outraString = "Outro \\texto"; // Usar duas barras invertidas faz com que consiga colocar uma barra invertida no texto da string.
// console.log(outraString)
//               01234567
let umaString = "Um texto";
// Colocar colchetes [] faz uma busca por índice na string
console.log(umaString[3])
// Função charAt() busca um caractere na string de acordo com o índice dele
console.log(umaString.charAt(6))
// Função concat() faz a mesma coisa que o + em strings, concatena
console.log(umaString.concat(' no seu bumbum'))
// Para saber em qual índice começa determinada palavra usamos o .indexOf() e também pode pedir para começar de um índice específico
console.log(umaString.indexOf('texto', 3)) // Começa a contagem da esquerda pra direita
// Para saber o último índice em uma string usamos o lastIndexOf() e também pode pedir para começar de um índice específico
console.log(umaString.lastIndexOf('o', 3)) // Começa a contagem da direita pra esquerda

// ALGUMA COISA SOBRE RegEx

console.log(umaString.match(/[a-z]/g))
console.log(umaString.search(/[a-z]/))
console.log(umaString.search(/x/))
console.log(umaString.replace('Um', 'Pum')) // Pode ou não usar uma expressão regular (RegEx) => Substitui uma coisa por outra
console.log(umaString.replace(/Um/, 'Pum')) // Mesma coisa que em cima mas com uma RegEx
let outraString = "O rato roeu a roupa do rei de roma."
console.log(outraString.replace(/r/g, 'p')); // Usar uma RegEx com a tag 'g' para trocar todas as letras 'r' por 'p'
console.log(outraString.length)
console.log(outraString.slice(2, 5)) // Busca uma coisa na string através dos índices indicando onde começa e onde termina a busca (sempre vai parar no último índice da busca, no caso da string para aparecer a palavra 'rato' toda, tem que colocar (2, 6))
console.log(outraString.slice(-3)) // Quando usa o start negativo no slice, estamos basicamente pegando o tamanho da string toda, subtraindo 3 e começando a contagem a partir do índice do resultado, que nesse caso seria 32 (ma. => 32,33,34)
console.log(outraString.slice(-5)) // Nesse caso, subtraindo 5, conseguimos buscar a palavra "roma." inteira.
console.log(outraString.slice(-5, -1)) // Colocando o índice final no slice, delimitamos mais a busca do índice, não deixando apenas para completar a busca a partir do resultado de subtração.
console.log(outraString.substring(umaString.length -5, outraString.length -1)) // Faz a mesma coisa que a de cima, só que com mais código
console.log(outraString.split(' ')) // Divide uma string pelo caractere estipulado no split em array
console.log(outraString.split(' ', 3)) // Também pode colocar um limite de resultados nessa divisão que você estipulou
console.log(outraString.toUpperCase()) // Deixa a string toda em maiúsculas
console.log(outraString.toLowerCase()) // Deixa toda a string em minúsculas