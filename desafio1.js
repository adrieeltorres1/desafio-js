

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



