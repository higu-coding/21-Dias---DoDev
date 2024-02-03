let nomes = []
let senhas = []
let contador = 0

let continuar = true
while(continuar){
    let op = prompt('O que deseja fazer? ' + '\n1 = Cadastrar \n2 = Login \n3 = Excluir cadastro')

    switch (op) {
        case '1':
            nomes [contador] = prompt('Cadastre um nome:')
            senhas [contador] = prompt('Cadastre uma senha: ')
            contador++
        break;
        case '2':
            let pNome = prompt('Insira um nome:')
            let pSenha = prompt('Insira uma senha: ')
            let logValido = false
            for (let i = 0; i < nomes.length; i++){
                if ( pNome == nomes[i] && pSenha == senhas[i]){
                    logValido = true
                }
                if(logValido){
                    console.log('Usuário logado com sucesso! Prossiga com sua navegação.')
                    alert('Usuário logado com sucesso!')
                } else {
                    console.log('Alguma credencial foi escrita errada, tente novamente.')
                    alert('Tente novamente! Alguma credencial foi escrita errada.')
                }
            }
        break;
        case '3':
            let delNome = prompt('Qual cadastro deseja excluir')
            let nomes2 = []
            let senhas2 = []
            let contador2 = 0

            for (let i = 0; i < contador; i++){
                if(delNome == nomes[i]){
                    alert('Usuário excluido com sucesso!')
                } else {
                    nomes2[contador2] = nomes[i]
                    senhas2[contador2] = senhas[i]
                    contador++
                }
            }
            nomes = nomes2
            senhas = senhas2
            contador--
        break;
        default:
            console.log('Deu errado, tente novamente com outra opção!')
    }
    let wCont = prompt('Desenha continuar? s / n')
            if(wCont != 's'){
                continuar = false
            }
}