let nomes = []
let notas = []
let wCont = true
let cont = 0

while(wCont){
    let pNome = prompt('Qual o nome do aluno?')
    let pNota = Number(prompt('Qual a nota do aluno?'))
    nomes [cont] = pNome   //'pNome [cont] = nomes' - QUANDO ESCREVI DESSA FORMA DEU ERRADO A MÉDIA E A SOMA
    notas [cont] = pNota   //'pNota [cont] = notas' - QUANDO ESCREVI DESSA FORMA DEU ERRADO A MÉDIA E A SOMA
    let dCont = prompt('Deseja continuar inserindo informações? Pressione 1')
    if(dCont != '1'){
        wCont = false
    }
    cont++
    console.log('A nota do aluno(a) ' + pNome + ' foi ' + pNota)
}

let somaNota = 0
for (let soma = 0; soma < notas.length; soma++){
    somaNota += notas[soma]
}
let media = somaNota / nomes.length

console.log('A soma de todas as notas foi de: ' + somaNota)
console.log('A media das notas foi de : ' + media)