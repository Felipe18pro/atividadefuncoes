/*
Crie uma função chamada averageArray que aceite um array de números e retorne a média
dos números. Para esta função vocês devem pesquisar e entender como o método reduce
funciona.

Dica: Some todos os elementos do array e divida pela quantidade de elementos. Utilize o
método reduce para somar os elementos do array.

Programa desenvolvido por:
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/


function averageArray(num) {

    for(let i = 0; i < num.length; i ++){
        media = num.reduce((soma, numero) => soma + numero, 0)
    }
    return media / num.length
}
let num = [1,2,3,4,5]
console.log(`Media: ${averageArray(num)}`)