// variaveis
let nome = prompt('Qual o seu nome?')
let idade = Number(prompt('Qual a sua idade?'))
let peso = prompt('Qual o seu peso?')
let altu = parseFloat(prompt('Qual a sua altura?'))
let prof = prompt('Qual a sua profissão?')

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é ' + prof + ', tem ' + altu + 'm de altura e pesa ' + peso + 'kg.')

if(idade >= 18){
    console.log('Está liberado para tomar umas geladas!')
}else {
    console.log('Sem gelada pra você.')
}

console.log('Você tem ' + idade + ' anos' + ', tem ' + (idade*12) + ' meses de idade, ' + parseInt(365/7*idade) + ' semanas de idade, e ' + (idade*365) + ' dias de idade')

let imc = parseInt(peso/(altu * altu) + 'kg/m2')
// TENTEI COM SWITCH CASE MAS NAO FUNCIONOU!!!!!!!!!!!!!!!!!!!!!!
if (imc < 18.5){
    console.log('Seu IMC é de ' + imc + ' esta no estado de magreza.')
}else if (imc >= 18.5 && imc <= 24.9){
    console.log('Seu IMC é de ' + imc + ' esta no estado normal.')
}else if(imc >= 24.9 && imc <= 30){
    console.log('Seu IMC é de ' + imc + ' esta no estado de sobrepeso.')
}else{
    console.log('Seu IMC é de ' + imc + ' esta no estado de obesidade.')
}  
let anoAt = 2023
let anoNasc = anoAt - idade
console.log('Você nasceu no ano de ' + anoNasc)
let contador = 0
for(anoNasc; anoNasc <= anoAt; idade++){
    console.log((anoNasc++) + ' - ' + contador++ + ' anos de idade')
}

do{
    let continuar = prompt('Deseja continuar? S / N')
}while(continuar == 'S')