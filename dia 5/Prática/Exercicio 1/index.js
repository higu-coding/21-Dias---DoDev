//Inserindo numeros
let numUm = Number(prompt('Insira um número'))
let numDois = Number(prompt('Insira outro número'))
let opMat = prompt('Escolha uma operação matemática ( + | - | * | / )')

//Fazendo a operação
switch(opMat){
    case '+':
        console.log('O resultado de ' + numUm + ' + ' + numDois + ' = ' + (numUm + numDois))
    break;
    case '-':
        console.log('O resultado de ' + numUm + ' - ' + numDois + ' = ' + (numUm - numDois))
    break;
    case '*':
        console.log('O resultado de ' + numUm + ' * ' + numDois + ' = ' + (numUm * numDois))
    break;
    case '/':
        console.log('O resultado de ' + numUm + ' / ' + numDois + ' = ' + (numUm / numDois))
    break;
    default:
        console.log('Não escolheu uma operação válida')
    break;
}