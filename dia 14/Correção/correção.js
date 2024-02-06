// FUNÇÃO PARA PERGUNTAR NOME E SALARIO DO COLABORADOR
let nome
let salario

function perguntarColaborador() {
    nome = prompt("Digite o nome do colaborador: ");
    salario = parseFloat(prompt("Digite o salário do colaborador:"))
    calcularAumentoSalario(nome, salario);
}

// FUNÇÃO PARA CALCULAR O ALMENTO DE SALARIO

function calcularAumentoSalario(nome, salario){
    let aumento = 0;
    if (salario <= 1500){
        aumento = 0.2; // 20%
    } else if (salario <= 2000){
        aumento = 0.15; // 15%
    } else if (salario <= 3000){
        aumento = 0.1; // 10%
    } else {
        aumento = 0.05; // 5%;
    }

    let novoSalario = salario + (salario * aumento);
    //EVIBINDO OS RESULTADOS
    console.log("Nome do colaborador: " + nome);
    console.log("Salário: R$" + salario);
    console.log("Aumento: " + (aumento * 100) + "%")
    console.log("Salário reajustado: R$ " + novoSalario);

    perguntarNovamente(); // Perguntar se deseja calcular novamente
}

function perguntarNovamente(){
    let resposta = prompt("Deseja calcular novamente: (s/n)");
    if (resposta == "s"){
        perguntarColaborador(); // Reiniciar processo
    } else {
        console.log("Programa encerrado.");
    }
}