/************************************************************
 * Objetivo: Sistema de tabuadas
 * Data: 13/09/2023
 * Autor: Estela Alves de Moraes
 * Versão: 1.0
 ***********************************************************/

const calcularTabuadas = function(valorTabuadaInicial, valorTabuadaFinal, valorInicial, valorFinal){

    let tabuadainicial = valorTabuadaInicial
    let tabuadafinal = valorTabuadaFinal
    let contador = valorInicial
    let contadorfinal = valorFinal

    if(tabuadainicial == '' || tabuadafinal == '' || contador == '' || contadorfinal == '')
        console.log('>> ERRO: É obrigatório informar todos os valores')
    else if (isNaN(tabuadainicial) || isNaN(tabuadafinal) || isNaN(contador) || isNaN(contadorfinal))
        console.log('>> ERRO: A tabuada só pode ser gerada com a entrada de números')
    else if (tabuadainicial > 100 || tabuadainicial <2 || tabuadafinal > 100 || tabuadafinal <2  ){
        console.log('>> ERRO: Somente tabuadas de 2 até 100')    
    }else if (contador > 50 || contador < 1 || contadorfinal > 50 || contadorfinal < 1){
        console.log('>> ERRO: Os valores calculados devem estar entre 1 e 50')
    }else{

        tabuadainicial = Number(tabuadainicial)
        tabuadafinal = Number(tabuadafinal)
        contador = Number(contador)
        contadorfinal = Number(contadorfinal)
        

        let resultado
        let status = false

        if(tabuadainicial < tabuadafinal){
            tabuadainicial = valorTabuadaFinal
            tabuadafinal = valorTabuadaFinal
        }
        if(contador < contadorfinal){
            contador = valorFinal
            contadorfinal = valorInicial
        }

        while(tabuadainicial <= tabuadafinal){
            console.log('Tabuada do ' + tabuadainicial)
            for(;contador <= contadorfinal;contador++){
                resultado = tabuadainicial * contador
                status = true
                console.log(`${tabuada} x ${contador} = ${resultado}`)
            }
            tabuadainicial++
        }

        return status

    }


}

calcularTabuadas('2', '5', '1', '10')
console.log(calcularTabuadas('5', '2', '1', '10'))