//Faça um programa que leia um valor em minutos e converta para horas e minutos;

let minutos = Number(prompt("Quantos minutos você demora para ir ao Trabalho"));



let horas = (minutos - (minutos % 60)) / 60;
let minutosRestantes = minutos % 60; 




console.log("Você leva " + horas + "h" + minutosRestantes + "m para chegar ao trabalho");

