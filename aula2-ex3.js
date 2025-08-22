//Um cliente compra três produtos com preços P1, P2 e P3 
// PRODUTO 1: DESCONTO 10%
// PRODUTO 2: DESCONTO 20%
// PRODUTO 3: SEM DESCONTO
// Faça um programa que calcule o valor final de cada produto
// e o total da compra, usando apenas operações aritméticas e variáveis.
//Após os cálculos, exiba os resultados.


let valorProdutoA = 100;
let valorProdutoB = 80;
let valorProdutoC = 40;

const valorPromocionalA = valorProdutoA - (valorProdutoA * 0.10);
const valorPromocionalB = valorProdutoB - (valorProdutoB * 0.20);

const somaProdutos = valorPromocionalA + valorPromocionalB + valorProdutoC;

console.log ('O preço do produto A é ' + valorPromocionalA); 

console.log ('O preço do produto B é ' + valorPromocionalB); 

console.log ('O preço do produto C é ' + valorProdutoC); 

console.log ('O valor total da sua compra é ' + somaProdutos); 

