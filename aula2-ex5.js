//Dado um número inteiro de três dígitos, 
// separe os dígitos em variáveis diferentes 
// (centena, dezena, unidade) u lizando apenas divisões e restos aritmé cos. 

let numero = Number(prompt("Digite um número inteiro de três digitos"));
console.log("Você digitou o número " + numero);



const centena = (numero - (numero % 100)) / 100;
const dezena = ((numero % 100) - (numero % 10)) / 10;
const unidade = numero % 10;

console.log("O seu número corresponde a centena de " + centena + " a dezena de " + dezena + " e a únidade de " + unidade);


// exercício 6: reconstrua o número.

let reconstrucao = (centena * 100) + (dezena * 10) + unidade;

console.log("O seu número reconstruído é " + reconstrucao);


