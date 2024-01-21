// variaveis
let mediaTodos = 0
let qtdHomens = 0
let maiorNotaH = 0
let qtdMulheresAcimaDe7 = 0
let contador = 1

// while
while(contador <= 10){
    nota = Number(prompt('Insira a nota do ' + contador + '° aluno:'))
    sexo = prompt('Insira o sexo do aluno: Masc/Fem')

    if(sexo == 'Masc'){
        if (nota > maiorNotaH){
            maiorNotaH = nota
        }
        qtdHomens++
    }
    if (sexo == 'Fem' && nota > 7){
        qtdMulheresAcimaDe7++
    }
    mediaTodos += nota
    contador++
}
mediaTodos = mediaTodos/10

console.log('A media dos alunos foram ' + mediaTodos)
console.log('A quantidade de homens que cadastrados foram: ' + qtdHomens)
console.log('A quantidade de mulheres que tiveram nota maior que 7 foram: ' + qtdMulheresAcimaDe7)
console.log('A maior nota dos homens foi: ' + maiorNotaH)