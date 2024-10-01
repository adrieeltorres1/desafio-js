

// Condicional para velocida//

// let velocidade = 100;

// if (velocidade >=50) {
//     console.log('Multado!')
// } else {
//     console.log('Não multado')
// }


//Escolher lado de um triângulo//

let LadoUm = prompt('Insira o primeiro valor do triângulo');

let LadoDois =  prompt('Insira o segundo lado do triângulo');

let LadoTres = prompt('Insira o terceiro lado do triângulo');

if (LadoUm === LadoDois && LadoDois === LadoTres) {
    document.write('Este triângulo é um Equilátero');
} 
else if (LadoUm === LadoDois ||  LadoUm === LadoTres || LadoDois ===LadoTres ){
    document.write('Este Triangulo é um Isósceles');
} else {
    document.write('Este triângulo é um Escaleno');
}


//Problema: Verifique se um número é positivo, negativo ou zero.//

let numero = parseFloat(prompt('Digite um número'));

if (numero > 0) {
    document.write('Este número é positivo.');
}else if (numero < 0) {
    document.write('O número é negativo')
}


