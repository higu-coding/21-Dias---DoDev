//CRIANDO VARIAVEIS
let mediageral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

// while
while(contador <= 10){
    nota = Number(prompt('Digite a nota do ' + contador + '° aluno'))
    sexo = prompt('Digite o sexo do aluno (m/f)')

    if(sexo == 'm'){
        if (nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }
    if (sexo == 'f' && nota > 7){
        qtdMulheresAcimaDe7++
    }
    mediageral += nota
    contador++
}
mediageral = mediageral/10

console.log('A media geral dos alunos foi ' + mediageral)
console.log('A quantidade de homens que cadastrados foram: ' + qtdHomens)
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi: ' + qtdMulheresAcimaDe7)
console.log('A maior nota dos homens foi: ' + maiorNotaHomens)