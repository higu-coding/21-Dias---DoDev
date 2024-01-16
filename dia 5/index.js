let idade = Number(prompt('Insira sua idade'))

switch(idade){
    case 10:
        console.log('Você tem 10 anos')
        console.log('Está entrando na pré-adolescencia')
        break;
    case 15:
        console.log('Você tem 15 anos')
        console.log('Já é um adolescente')
        break;
    default:
        console.log('Você tem ' + idade + ' anos')
        break;
}