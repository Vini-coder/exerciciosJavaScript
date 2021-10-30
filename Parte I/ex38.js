/* 
Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

const printImpares = (inicio = 0, fim = 100) => {

    if (inicio > fim) { 
        [inicio, fim] = [fim, inicio]
    }

    for (let i = inicio; i < fim; i++) {

        if (i % 2 != 0) {
            console.log(i)
        }
    }
} 

printImpares(50, 110)
console.log('-----')
printImpares(110, 50)
console.log('-----')
printImpares(10)