var fatorial = require ('./modulo/fatorial.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor: ', function(valorDigitado){
    let valor = valorDigitado

    console.log('Fatorial de ' + valor + ': ' + fatorial.calcularFatorial(valor))

    entradaDados.close()
})