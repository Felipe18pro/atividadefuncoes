/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/

function findMax(numeros) {
    let maior = numeros[0]
    for(let i = 0; i < numeros.length; i++){
       if(numeros[i] > maior){
        maior = numeros[i]
       }
    }
    return maior
}

//teste
let numeros = [23, 67, 89, 65]
console.log(findMax(numeros))

