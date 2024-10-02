// Problema: Verifique se um número é positivo, negativo ou zero.

let numero = parseFloat(prompt('Digite um número'));

if(numero == 0) document.write('O número é zero')
if (numero > 0) {
    document.write('Este número é positivo.');
}else if (numero < 0) {
    document.write('O número é negativo')
}
