// variaveis
let opcao = prompt('Escolha uma opção: ' + '\n1 = Abastecer com gasolina \n2 = Abastecer com álcool \n3 = Apenas calibrar pneus')
let val

//switch
switch (opcao){
    case '1':
        val = Number(prompt('Qual valor deseja abastecer?'))
        console.log('A quantidade de litros de gasolina foi de ' + (val / 5) + 'L')
        break;
    case '2':
        val = Number(prompt('Qual valor deseja abastecer?'))
        console.log('A quantidade de litros de álcool foi de ' + (val / 3) + 'L')
        break;
    default:
        console.log('Pneus calibrados com sucesso')
        break;
}