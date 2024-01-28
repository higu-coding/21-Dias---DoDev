let nomes = []

let posArray = 0
let continuar = true 

while(continuar){
    let nomeIns = prompt('Insira seu nome')
    nomes[posArray] = nomeIns

    let wCont = prompt('Deseja continuar? Digite 1')
    if (wCont != '1'){
        continuar = false
    }
    posArray++
}