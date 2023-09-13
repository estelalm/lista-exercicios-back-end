/************************************************************
 * Objetivo: Calcular o Fatorial de um número fornecido pelo usuário
 * Data: 13/09/2023
 * Autor: Estela Alves de Moraes
 * Versão: 1.0
 ***********************************************************/

const calcularFatorial = function (valorFornecido){
    let valor = valorFornecido
    let contador = 1
    let resultado = valor

    while(contador < valor){
        resultado = resultado * (valor-contador)
        contador++
    }
    return resultado
}


module.exports = {
    calcularFatorial
}