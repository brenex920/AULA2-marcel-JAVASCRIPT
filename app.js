/****************************************************
 criar um sistema que realiza calculos de medias escolares
       (variaveis, condicioal, funçoes)


Autor Breno
data 01/08/2025
versâo 1.0

******************************************************


formas de criar uma variavel 

var = permite criar um espaço em memoria (viavel) esse metodo é
     * considerado antigo.
                             obs: caso precise utilizar, aconselha-se 
                             fora de bloco de programação

let = permite criar um espaço de memoria (variavel) apenas dentro de um bloco de programaçao (IF, LOOP Funcion etc...).
       toda variavel criado com let apenas existe dentro aquele bloco de programaçao.

const = permite criar um espaço em memoria (costate) para guardar
        conteudos que não sofrerão ,udaças durante o programa.

            obs: sempre que possivel criar a const com letras MAIUSCULAS

formas de comversao de tipos de dados 

String()  comverte a variavel em string
toUpperCase() formata o conteudo de uma string maiusculo
toLowerCase() Formata o conteudo de uma string em minusculo
Nuber()  comverte uma string para numero inteiro ou float
parseInt()  comverte uma stryng para inteiro
parseFloat() comverte uma stryng para float
Boolean() comverte uma variavel para buleano (verdadeiro/falso)
Object() Comverte uma varuavek oara objeto(ARRAY, ISON, CLASSE) 

toFixed() permite limutar a quantidade de casas decimais em uma variavel 




operadores de comparação

==  -> validação de igualdade de conteudos 
!=  -> validação de diferença de conteudos
<   -> validação de valor menor
<=  -> validação de valor menor ou igual 
>   -> validação de valor maior
>=  -> validação de valor ou igual 
===  -> validação de igualdade de comteudos e igualdade de tipo de dados 
!==  -> validaçao de diferença de conteudos e ugualdade de tipos de dados. 
          OBS: verificar em cada linguagem o modo tratado 
!=! - > validação de difenreça de conteudos e diferença de tipos de dados 
          OBS: verificar em cada linguagem como isso e tratado



 operadores logicos


  E  AND  &&
  OU  OR  ||
  NAO NOT !






********************************************************/



var readline = require('readline')

var entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout


})


entradaDeDados.question('digite o nome do aluno:: ', function (nome) {


    let nomeAluno = String(nome).toUpperCase()


    entradaDeDados.question(' digite a nota1: ', function (valor1) {

        let nota1 = valor1

        entradaDeDados.question('digite a nota2: ', function (valor2) {
            let nota2 = valor2

            entradaDeDados.question('digite a nota3: ', function (valor3) {

                let nota3 = valor3

                entradaDeDados.question('digite a nota4: ', function (valor4) {

                    let nota4 = valor4

                    
                    if (nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                        console.log('ERRO É obrigatorio preencher todos as informaçoes.')


                    }else if(!isNaN(nomeAluno)){
                        console.log(`ERRO:nao pode aver numeros no nome de usuarios`)
                    }
                    else if(isNaN(nota1) || isNaN(nota2) || isNaN (nota3) || isNaN (nota4) ){
                            console.log(`ERRO: as notas nao podem ter letras verifique a nota aplicada`)
                    }
                    else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10){
                        console.log(`ERRO: dados ivalidos. voce de entrar com valores entre 0 e 10`)
                }else{
                        let media =(Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) /4
                            let statusAluno
                        if(media >= 7 && media <= 10 ){
                            statusAluno = `APROVADO`
                        }else if(media < 7 && media >= 5){
                            statusAluno = `EXAME`
                        }else if ( media < 5 && media >= 0){
                            statusAluno = `REPROVADO`
                        }
                        console.log(`O aluno(a) ${nomeAluno} teve a media ${media.toFixed(1)} e está ${statusAluno}`)
                    }
                })//nota 4
            })//nota 3
        })// nota2
    })//nota1

})