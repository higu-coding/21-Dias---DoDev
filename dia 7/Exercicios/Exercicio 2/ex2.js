let saldo = 1000;
let maiorValIns = 0;
let somaValIns = 0;
let totTransf = 0;
let cont = false

do{
    const nome = prompt('Digite o seu nome:')
    const cpf = prompt('Digite seu CPF:')
    const val = Number(prompt('Digite o valor da transação: '));
    const oper = prompt('Qual operação deseja fazer? S / D')

    if(val < 0 ){
        console.log('Valor inválido. A transação cancelada.');
    } else if (oper == 'S' && val > saldo){
        console.log('Saldo insuficiente. A transação cancelada.')
    } else if (oper == 'S'){
        console.log(`Oi, ${nome} (${cpf}), seu saldo atual é de R$${saldo}.`);
        saldo -= val;
        totTransf++;
        somaValIns += val;
        if (val > maiorValIns){
            maiorValIns = val;
        }
        console.log(`A transação foi realizada. Seu saldo atual é de R$${saldo}.`)
    } else {
        console.log(`Oi, ${nome} (${cpf}), seu saldo atual é de R$${saldo}.`);
        saldo += val;
        totTransf++;
        somaValIns += val;
        if(val > maiorValIns){
            maiorValIns = val
        }
        console.log(`A transação foi realizada. Seu saldo atual é de R$${saldo}.`)
    }

    const opcao = prompt('Deseja continuar? (1 para continuar, 2 para parar):');
    if (opcao === '1'){
        cont = true
    } else if (opcao === '2'){
        cont = false
    } else {
        console.log('Opção inválida. Programa encerrado.');
        cont = false
    }

} while(cont)

console.log(`Saldo final: R$${saldo}`)/
console.log(`Maior valor inserido: R$${maiorValIns}`);
console.log(`Média dos valores inseridos: R$${(somaValIns / totTransf)}`)