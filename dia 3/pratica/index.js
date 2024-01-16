let nome = prompt('Insira seu nome')
let idade = Number(prompt('Insira sua idade'))
let altu = prompt('Insira a sua altura')
let peso = Number(prompt('Insira seu peso'))
let anoNasc = Number(prompt('Insira o ano de nascimento'))

console.log('Olá ' + nome, ', você tem ' + idade, 'anos', ',nasceu no ano ', (2023 - idade), ', tem ' + altu, 'de altura, pesa ' + peso, 'kg, seu IMC é ' + parseInt(peso / altu / altu), 'Kg/m2')