var tabuada = require('./modulo/tabuada.js')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Insira o valor da primeira tabuada: ', function (valorTabuadaInicial) {

    let tabuadainicial = valorTabuadaInicial

    entradaDados.question('Insira o valor d aúltima tabuada ', function (valorTabuadaFinal) {

        let tabuadafinal = valorTabuadaFinal

        entradaDados.question('Insira o primeiro valor a ser calculado: ', function (valorInicial) {

            let contador = valorInicial

            entradaDados.question('Insira o último valor a ser calculado: ', function(valorFinal){

                let contadorfinal = valorFinal

                tabuada.calcularTabuadas(tabuadainicial, tabuadafinal, contador, contadorfinal)

                entradaDados.close()
            })

        })

    })

})


