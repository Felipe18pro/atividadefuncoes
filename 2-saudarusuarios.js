/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/



function greetUsers(resposta) {
    for (let nomes of resposta) { 
        console.log(`Olá ${nomes}`)        
    }
}


let nomes = ['Alex','Edi','Felipe','Leticia']

greetUsers(nomes)