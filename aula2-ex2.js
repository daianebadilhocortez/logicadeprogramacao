//Faça um programa que leia duas variáveis A e B, 
// e troque os valores entre elas utilizando apenas operações aritméticas
// SEM criar uma terceira variável auxiliar


let variavelA = Number(prompt("Digite o seu primeiro número"));
console.log("O seu primeiro número é " + variavelA + "!")

let variavelB = Number(prompt("Digite o seu segundo número"));
console.log("O seu segundo número é " + variavelB + "!")

variavelA = (variavelA + variavelB);
variavelB = (variavelA - variavelB);
variavelA = (variavelA - variavelB);


console.log ('Agora o seu primeiro número é ' + variavelA); 
console.log ('Agora o seu segundo número é ' + variavelB); 

