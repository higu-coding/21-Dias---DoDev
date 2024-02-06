let nome
let salario

function apresentarSalario() {
    nome =  prompt('Qual o seu nome?')
    salario = Number(prompt('Qual o seu salário?'))
    calcSal(nome, salario)
}

function calcSal(nome, salario){
    let aumento = 0
    if(salario <= 1500){
        aumento = 20/100
        console.log(`Seu salário é R$ ${salario}`)
    } else if(salario >=1501){
        aumento =15/100
        console.log(`Seu salário é R$ ${salario}`)
    }else if(salario >=2001){
        aumento = 10/100
        console.log(`Seu salário é R$ ${salario}`)
    }else if(salario >=3000){
        aumento = 5/100
        console.log(`Seu salário é R$ ${salario}`)
    }
    let salNovo = salario + (salario * aumento)

    console.log('O nome do funcionário é ' + nome + ', com salario de ' + salario + ', e teve um aumento de ' + aumento * 100 + '%.')
    console.log('Após o ajuste seu salario ficou no valor de R$ ' + salNovo)
    
    perguntarDnv();
}

function perguntarDnv(){
    let resp = prompt('Quer calcular denovo? s / n')
    if(resp == 's'){
        apresentarSalario()
    } else{
        console.log('Encerrado!')
    }
}

