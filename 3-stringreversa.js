/*
Crie uma função chamada reverseString que aceite uma string como parâmetro
e retorne a string invertida. Por exemplo, se a entrada for "hello", a
função deve retornar "olleh".

Dica: Para inverter uma string, você pode usar os métodos split('')
para dividir a string em um array de caracteres, reverse() para
inverter o array e join('') para juntar os caracteres de volta em uma string.

Programa desenvolvido por:
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/



function reverseString(palavra) {
    
    return palavra.split('').reverse().join('')
}

let palavra = 'Hello'
console.log(reverseString(palavra))
