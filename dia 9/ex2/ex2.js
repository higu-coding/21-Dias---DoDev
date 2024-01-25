let nome = prompt('Informe seu nome:')
let idade = parseInt(prompt('Informe a sua idade:'))
let sal = parseInt(prompt('Informe a seu salário:'))

let opcao = prompt('As informações estão corretas? S / N')

// na correção pode jogar as variaveis dentro no while
while(opcao == 'N'){
    nome = prompt('Informe seu nome:')
    idade = prompt('Informe a sua idade:')
    sal = prompt('Informe a seu salário:')
    opcao = prompt('As informações estão corretas? S / N')
}

contador = 1
ano = 1
let aum = 0.015
for (ano; ano <= 10; ano++ ){
    sal += sal * aum
    aum*=2
    console.log((2023+ano) + ' = $ ' + sal)
}
