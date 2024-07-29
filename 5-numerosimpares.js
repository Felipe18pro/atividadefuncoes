/*
Crie uma função chamada getOddNumbers que aceite um array de números e retorne
um novo array contendo apenas os números ímpares do array original.

Dica: Para filtrar os números ímpares, você pode usar o operador módulo (%).
Um número é ímpar se o resto da divisão desse número por 2 é diferente de zero
(num % 2 !== 0). Você também pode usar o método filter para criar um novo
array contendo apenas os números que atendem a essa condição.

Programa desenvolvido por:
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/

// Teste
let numeros = [1,2,3,4,5,6,7,8,9,10]
let numerosImp = []

// Função
function impares() {
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 1){
            numerosImp.push(numeros[i])            
        } 
    }
}

impares()

console.log(numerosImp)
