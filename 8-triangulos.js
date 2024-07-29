/*
Crie uma função chamada drawTriangle que aceite um número n e desenhe um triângulo de
altura n no console usando asteriscos (*).

Dica: Utilize um laço de repetição para iterar desde 1 até n. Em cada iteração,
imprima uma linha com um número crescente de asteriscos, começando com 1 asterisco
na primeira linha e adicionando um asterisco a cada linha subsequente.
Você pode usar a função .repeat().

Programa desenvolvido por:
- Alex
 - Edi
 - Felipe 
 - Leticia
*/

function drawTriangle(n) {
    for (let i = 1; i <= n; i++) {

        let linha = '*'.repeat(i);
        
        console.log(linha);
    }
}

drawTriangle(5);
