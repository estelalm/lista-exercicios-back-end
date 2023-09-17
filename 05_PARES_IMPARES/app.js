var numeros = require('./modulo/numeros.js')

var readline = require ('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Insira o valor inicial: ', function(numeroInicial){
    let inicial = numeroInicial

    entradaDados.question('Insira o valor final: ', function(numeroFinal){
        let final = numeroFinal

        console.log()
        console.log('[1] Somente os pares [2] Somente os ímpares [3] Pares e ímpares')
        entradaDados.question('Selecione o número correspondente ao que deseja mostrar? ', function(escolhaUsuario){

            let escolha = escolhaUsuario

            numeros.identificarNumeros(inicial, final, escolha)


            entradaDados.close()
        })
    })

})