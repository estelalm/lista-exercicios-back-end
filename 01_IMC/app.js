var imc = require('./modulo/imc.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o peso: ', function(pesoPessoa){
    peso = pesoPessoa

    entradaDados.question('Digite a altura: ', function (alturaPessoa){
        altura = alturaPessoa

        imc.calcularIMC(peso, altura)

        entradaDados.close()
    })
})