let nomes = []
let senhas = []

function EscolhaDoUsuario(){
    let opcao = prompt("Qual opção deseja?" + "\n1 = Cadastrar \n2 = Login \n3 = Excluir \n4 = Encerrar")
    return opcao
}

function CadUser(){
    nomes.push(prompt('Insira o nome que deseja cadastrar:'))
    senhas.push(prompt('Insira a senha que deseja cadastrar:'))
}

function Login(nome, senha){
    let i = nomes.indexOf(nome)
    if (i !== -1 && senhas[i] == senha){
        return true;
    } else {
        return false;
    }
}

function ExcluirCad(nome){
    let i = nomes.indexOf(nome)
    if(i !== -1){
        nomes.splice(i, 1);
        senhas.splice(i, 1);
        console.log('Você excluiu um usuário!')
    } else {
        console.log('Não temos esse usuário cadastrado!')
    }
}

let continuar = true

while(continuar) {
    let nome
    let senha
    let opcao = EscolhaDoUsuario()
    switch(opcao){
        case '1':
            CadUser()
            break;
        case '2':
            nome = prompt('Digite um nome:')
            senha = prompt('Digite uma senha:')
            let login = Login(nome, senha)
            if(login) {
                console.log('Seu login foi efetuado com sucesso')
            } else {
                console.log('Você deve ter errado alguma credencial! Tente novamente!')
            }
            break;
        case '3':
            nome = prompt('Digite um nome:')
            ExcluirCad(nome);
            break;
        case '4':
            continuar = false
            break;
        default:
            console.log('Tente uma opção válida! Por favor')
            break;
    }
}