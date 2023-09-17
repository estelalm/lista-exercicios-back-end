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

    //requisitos do sistema A entrada da tabuada deverá ser entre 2 e 100, não sendo permitido outros
    // valores; Nenhuma entrada de dados deverá ficar sem preenchimento; O valor até onde será 
    //calculada a tabuada deverá ser entre 1 e 50;

    if(tabuadainicial == '' || tabuadafinal == '' || contador == '' || contadorfinal == '')
        console.log('>> ERRO: É obrigatória a entrada de todos os valores')
    else if (isNaN(tabuadainicial) || isNaN(tabuadafinal) || isNaN(contador) || isNaN(contadorfinal))
        console.log('>. ERRO: Os valores inseridos devem ser números inteiros.')
    else if(tabuadainicial < 2 || tabuadainicial > 100 || tabuadafinal < 2 || tabuadafinal > 100)
        console.log('>> ERRO: Os valores inseridos devem estar entre 2')
    else if(contador < 1 || contador > 50 || contadorfinal < 1 || contadorfinal > 50)
        console.log('>> ERRO: Os valores a serem calculados só podem estar entre 1 e 50')   
    else{

        let resultado
        let status = false

        //se os valores forem invertidos, mudar para não dar erro
        if(tabuadainicial> tabuadafinal){
            tabuadainicial = valorTabuadaFinal
            tabuadafinal = valorTabuadaInicial
        }
        if(contador > contadorfinal){
            contador = valorFinal
            contadorfinal = valorInicial
        }

        //fazer cada tabuada
        for(;tabuadainicial <= tabuadafinal; tabuadainicial++){
            console.log()
            console.log('Tabuada do ' + tabuadainicial)
            for(;contador <= contadorfinal;contador++){
                resultado = tabuadainicial * contador
                console.log(`${tabuadainicial} x ${contador} = ${resultado}`)
            }
            contador = valorInicial
            status = true
        }

        return status
    }
}

module.exports={
    calcularTabuadas
}
