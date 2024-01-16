let nome = prompt('Insira o seu nome')
let idade = Number(prompt('Insira a sua idade'))

if(nome === "Hiago" && idade === 18){
    console.log('Você se chama Hiago e você tem 18 anos')
}else if(nome === "Hiago" || idade === 18){
    console.log('Seu nome é Hiago OU você tem 18 anos')
}else{
    console.log('Você não se chama Hiago E não tem 18 anos')
}