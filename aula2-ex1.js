//Faça um programa que leia duas variáveis A e B, 
// e troque seus valores ulizando uma variável auxiliar


let variavelA = Number(prompt("Digite o seu primeiro número"));
console.log("O seu primeiro número é " + variavelA + "!")

let variavelB = Number(prompt("Digite o seu segundo número"));
console.log("O seu segundo número é " + variavelB + "!")

let temp = variavelA;
variavelA = variavelB;
variavelB = temp;



console.log ('Agora o seu primeiro número é ' + variavelA); 
console.log ('Agora o seu segundo número é ' + variavelB); 


