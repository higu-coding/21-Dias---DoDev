let idade = Number(prompt('Insira sua idade'))
let nome = prompt('Insira o seu nome')

if(idade === 18 && nome === 'Hiago'){
    console.log('Você tem 18 anos e o seu nome é Hiago')
}else if(idade === 18 || nome === 'Hiago'){
    console.log('Voce tem 18 anos OU seu nome é Hiago')
}else{
    console.log('Você não tem 18 anos e o seu nome não é Hiago')
}