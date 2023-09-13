/************************************************************
 * Objetivo: Calcular a média doss alunos de uma universidade
 * Data: 13/09/2023
 * Autor: Estela Alves de Moraes
 * Versão: 1.0
 ***********************************************************/

const calcularMedia = function(nota1, nota2, nota3, nota4, nota5){

    let n1 = nota1
    let n2 = nota2
    let n3 = nota3
    let n4 = nota4
    let n5 = nota5
    let media

    if(n1 == '' || n2 == '' || n3 == '' || n4 == '' || n5 == '')
        console.log('>> ERRO: É obrigatório a entrada de todos os valores')
    else if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5))
        console.log('>> ERRO: Os valores inseridos devem ser números')
    else if(n1 > 100 || n1 < 0 || n2 > 100 || n2 < 0 || n3 > 100 || n3 < 0 || n4 > 100 || n4 < 0 || n5 > 100 || n5 < 0 )
        console.log('>> ERRO: Os valores inseridos devem ser entre 0 e 100')      
    else{
        media = (n1+n2+n3+n4+n5)/5
    }



    return media
}

const mostrarSituacao = function(mediaCalculada){

    let situacao
    let media = mediaCalculada

    if( media >= 70){
        situacao = 'aprovado'
    }else if (media < 50)
        situacao = 'reprovado'
    else
        situacao = 'em exame'

        return situacao
}

const verificarExame = function(situacaoExame){
    let situacao = situacaoExame

    if(situacao == 'em exame'){
        
    }
}



console.log(mostrarSituacao(calcularMedia(2, 20, 50, 40, 20)))
