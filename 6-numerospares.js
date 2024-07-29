/*
Crie uma função chamada getEvenNumbers que aceite um array de números e
retorne um novo array contendo apenas os números pares do array original.

Dica: Para filtrar os números pares, você pode usar o operador módulo (%).
Um número é par se o resto da divisão desse número por 2 é zero (num % 2 === 0).
Tente utilizar o método filter para criar um novo array contendo apenas os
números que atendem a essa condição.

Programa desenvolvido por:
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/

let numeros = [1,2,3,4,5,6,7,8,9,10]
let numerosPar = []

// Função
function pares() {
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            numerosPar.push(numeros[i])            
        } 
    }
}

pares()

console.log(numerosPar)