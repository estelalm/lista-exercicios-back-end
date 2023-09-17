/************************************************************
 * Objetivo: Calcular a média doss alunos de uma universidade
 * Data: 13/09/2023
 * Autor: Estela Alves de Moraes
 * Versão: 1.0
 ***********************************************************/

const calcularMedia = function (nota1, nota2, nota3, nota4, nota5){

    let n1 = Number(nota1.replace(',', '.'))
    let n2 = Number(nota2.replace(',', '.'))
    let n3 = Number(nota3.replace(',', '.'))
    let n4 = Number(nota4.replace(',', '.'))
    let n5 = Number(nota5.replace(',', '.'))
    let media
    
    if(n1 == '' || n2 == '' || n3 == '' ||n4 == '' ||n5 == '' || isNaN(n1) || isNaN(n2)|| isNaN(n3) || isNaN(n4) || isNaN(n5))
        console.log('ERRO: Todas as notas devem ser preenchidas com números.')
    else if(n1 > 100 || n2 > 100 || n3 > 100 ||n4 > 100 ||n5 > 100 || n1 < 0 || n2 < 0 || n3 < 0 ||n4 < 0 ||n5 < 0)
        console.log('ERRO: As notas só podem estar entre 0 e 100') 
    else
        media = (n1+n2+n3+n4+n5)/5

    return media;
    
}

const mostrarSituacao = function(mediaFinal){

    let media = mediaFinal
    let situacao

    if(media > 69)
        situacao = 'aprovado'
    else if(media > 49)
        situacao = 'para exame'
    else
        situacao = 'reprovado'

    return situacao
}

const mostrarSituacaoFinal = function(mediaExame){

    let media = mediaExame
    let situacaoFinal

    if(media >= 60){
        situacaoFinal = 'aprovado'
    }else{
        situacaoFinal = 'reprovado'
    }

    console.log(`Média final do exame: ${media}  (${situacaoFinal})`)
}

const calcularExame = function(mediaFinal, notaExame){

    let media = Number(mediaFinal)
    let exame = Number(notaExame)
    let resultado

    resultado = (media+exame)/2

    return resultado

}


const mostrarRelatorio = function (nomeAluno, generoDoAluno,  nomeCurso, nomeDisciplina, nomeProfessor , generoDoProfessor, mediaFinal){

    let aluno = nomeAluno
    let professor = nomeProfessor
    let generoAluno = generoDoAluno.toLowerCase()
    let generoProfessor = generoDoProfessor.toLowerCase()
    let curso = nomeCurso
    let disciplina = nomeDisciplina
    let media = mediaFinal
    let situacao = mostrarSituacao(media)

    let aluno_A
    if(generoAluno == 'f' )
        aluno_A = 'A aluna'
    else
        aluno_A = 'O aluno'

    let professor_A
    if(generoProfessor == 'f')
        professor_A = 'Professora'
    else
        professor_A = 'Professor'

    console.log('Relatório do aluno: ')
    console.log(`${aluno_A} ${aluno} foi ${situacao} na disciplina ${disciplina}`)
    console.log(`Curso: ${curso}`)
    console.log(`${professor_A}: ${professor}`)
    console.log(`Média final: ${media}`)

}

module.exports ={
    calcularMedia,
    mostrarRelatorio,
    mostrarSituacao,
    calcularExame,
    mostrarSituacaoFinal
}