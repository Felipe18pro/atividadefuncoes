/*
Crie uma função chamada alphabeticalOrder que aceite uma string e retorne uma nova
string com as letras ordenadas em ordem alfabética.

Dica: Utilize o método split para converter a string em um array de caracteres.
Utilize o método sort para ordenar os caracteres. Utilize o método join para
juntar os caracteres em uma nova string.

Programa desenvolvido por:
 - Alex
 - Edi
 - Felipe 
 - Leticia
*/
function alphabeticalOrder(string) {
    // Converte a string para minúsculas
    let lowerCaseString = string.toLowerCase();
    
    // Divide a string em caracteres
    let ordem = lowerCaseString.split('');
    
    // Ordena os caracteres
    ordem.sort();
    
    // Junta os caracteres ordenados em uma nova string
    let novaString = ordem.join('');
    
    return novaString;
}

let novaString = alphabeticalOrder("Vingadores do algoritimo");
console.log(novaString);