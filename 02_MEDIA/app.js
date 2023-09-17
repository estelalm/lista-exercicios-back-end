
var media = require('./modulo/media')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Nome do aluno: ', function (nomeAluno) {

    let aluno = nomeAluno

    entradaDados.question('Gênero do aluno (F/M): ', function (generoDoAluno) {

        let generoAluno = generoDoAluno

        entradaDados.question('Curso: ', function (nomeCurso) {

            let curso = nomeCurso

            entradaDados.question('Disciplina: ', function (nomeDisciplina) {

                let disciplina = nomeDisciplina

                entradaDados.question('Professor: ', function (nomeProfessor) {

                    let professor = nomeProfessor

                    entradaDados.question('Gênero do professor (F/M): ', function (generoDoProfessor) {

                        let generoProfessor = generoDoProfessor

                        console.log()

                        entradaDados.question('Nota 1: ', function (nota1) {

                            let n1 = nota1


                            entradaDados.question('Nota 2: ', function (nota2) {

                                let n2 = nota2


                                entradaDados.question('Nota 3: ', function (nota3) {

                                    let n3 = nota3


                                    entradaDados.question('Nota 4: ', function (nota4) {

                                        let n4 = nota4


                                        entradaDados.question('Nota 5: ', function (nota5) {

                                            n5 = nota5


                                            let mediaFinal = media.calcularMedia(n1, n2, n3, n4, n5)

                                            if(mediaFinal != undefined){
                                                let situacao = media.mostrarSituacao(mediaFinal)
                                                console.log('')
                                                media.mostrarRelatorio(aluno, generoAluno, curso, disciplina, professor, generoProfessor, mediaFinal)
                                                if(situacao =='para exame'){
                                                    entradaDados.question('Nota do aluno no exame: ', function(notaExame){
    
                                                        let exame = notaExame
                                                        let mediaExame = media.calcularExame(mediaFinal, exame)
                                                        media.mostrarSituacaoFinal(mediaExame)
    
                                                    })
                                                }else{
                                                    console.log('')
                                                }
                                            }

                                            

                                        })


                                    })

                                })
                            })

                        })

                    })
                })

            })
        })
    })

})