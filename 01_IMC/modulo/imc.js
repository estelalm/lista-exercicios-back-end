/************************************************************
 * Objetivo: Calcular o IMC
 * Data: 13/09/2023
 * Autor: Estela Alves de Moraes
 * Versão: 1.0
 ***********************************************************/

const calcularIMC = function(pesoPessoa, alturaPessoa){
    let peso = pesoPessoa.replace(',','.')
    let altura = alturaPessoa.replace(',','.')

    let resultado
    let situacao
    let status = false

    if(peso == '' || altura == '')
        console.log('>> ERRO: É obrigatório a entrada de todos os valores')
    else if(isNaN(peso) || isNaN(altura))
        console.log('>> ERRO: Os valores inseridos devem ser números')
    else{
        peso = Number(peso)
        altura = Number(altura)

        resultado = peso/(altura*altura)

        if(resultado > 40){
            situacao = 'Obesidade III'
        }else if(resultado >=35){
            situacao = 'Obesidade II'
        }else if(resultado >= 30){
            situacao = 'Obesidade I'
        }else if(resultado >= 25){
            situacao = 'Acima do peso'
        }else if(resultado >= 18.5){
            situacao = 'Peso normal'
        }else{
            situacao = 'Abaixo do peso'
        }

        status = true
    } 

    console.log('IMC: '+ resultado.toFixed(1))
    console.log('Situação: '+ situacao)
    return status

}

module.exports = {
    calcularIMC
}
