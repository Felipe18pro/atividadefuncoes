/*
Este é um arquivo com desafios extras. Eles são mais difíceis e vão exigir mais pesquisa.
Se você não conseguir fazer todos, não tem problema, se concentre nos exercícios do 1 ao 12.

1. Crie uma função chamada intersection que aceite dois arrays e retorne um novo array contendo
apenas os elementos que estão presentes em ambos os arrays.

Dica: Utilize o método filter para encontrar os elementos comuns. Utilize o método
includes para verificar se um elemento está presente no outro array.

Programa desenvolvido por:
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/

/*
2. Crie uma função chamada drawEvenNumberTriangle que aceite um número n, use a função
getEvenNumbers para gerar os primeiros n números pares e, em seguida, use esses números
para desenhar um triângulo no console.

Dica: Primeiro, crie a função getEvenNumbers que retorna os primeiros n números pares.
Use um laço para iterar desde 1 até n e, em cada iteração, imprima os primeiros i
números pares. Utilize a função getEvenNumbers para obter os números pares.
*/

//ATIVIDADE 1

//site developer.mozilla.org
function intersection(primeiro, segundo) {
    // O método `.filter()` aplica a função callback para cada elemento do array `primeiro`.
    let result = primeiro.filter(elemento => segundo.includes(elemento));
    //elemento => segundo.includes(elemento) é uma função callback que verifica se o elemento atual do array 
    //primeiro está presente no array segundo, usando o método .includes(), que retorna true se o elemento for encontrado e false caso contrário.
    return result;
}

let primeiro = [1, 2, 3, 4, 5];
let segundo = [2, 3, 4, 5, 6];
let resultado = intersection(primeiro, segundo);
console.log(resultado); 

//ATIVIDADE 2
function getEvenNumbers(n) {
    //Inicializa um array vazio numerosPares para armazenar os números pares.
    let numerosPares = [];
   //Começa com o número par 2.
    let number = 2;
   //basicamente, criando um loop, adiciona números pares ao array até ter n números. Cada número par é obtido adicionando 2 ao anterior.
    for (let i = 1; i <= n; i++) {
        numerosPares.push(number);
        number += 2; 
    }
    return numerosPares;
}

function drawEvenNumberTriangle(n) {
    //Obtém os primeiros n números pares chamando getEvenNumbers(n).

    let numerosPares = getEvenNumbers(n);

     // Loop ,para cada linha do triângulo, cria uma substring dos números pares e os une com espaços.
     //O loop for itera de i = 0 até i < n, onde n é uma variável que define o número de linhas ou a quantidade de iterações que o loop fará.
    for (let i = 0; i < n; i++) {     
        let linha = numerosPares.slice(0, i + 1).join(' ');
        //Dentro do loop, o método .slice(0, i + 1) é usado para criar um novo array contendo os primeiros i + 1 elementos do array numerosPares

        //Imprime cada linha para formar o triângulo.
        console.log(linha);
    }
}

drawEvenNumberTriangle(10);


