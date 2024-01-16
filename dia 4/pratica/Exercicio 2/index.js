let nome = prompt('Insira seu nome')
let idade = Number(prompt('Insira sua idade'))
let cartMotor = prompt('Possui carteira de motorista? Sim ou não')
let car = prompt('Possui algum carro? Sim ou não')

if(idade < 18 || cartMotor === 'Não'){
    console.log(nome + ', você não pode dirigir!')
}else if(cartMotor === 'Sim' && car === 'Sim'){
    console.log(nome + ', você vai ser o motorista!')
}else{
    console.log(nome + ', você pode dirigir, mas não tem carro')
}