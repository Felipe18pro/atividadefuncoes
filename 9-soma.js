/*
Crie uma função chamada sumTwoNumbers que aceite dois números como parâmetros e retorne
a soma deles.

Programa desenvolvido por:
 
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/


function sumTwoNumbers(resultado) {
    let soma = 0 
    for(let num of resultado){
        soma += num
    }
    return soma
}

let numeros = [4,8]

console.log(sumTwoNumbers(numeros))