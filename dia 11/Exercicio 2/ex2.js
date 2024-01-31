let model = []
let ano = []
let val = []
let cont = true
let contador = 0

while(cont){
    let modelo = prompt('Qual o modelo do carro?')
    let year = parseInt(prompt('Qual o ano do carro?'))
    let valor = Number(prompt('Qual o valor do carro?'))
    model [contador] = modelo
    ano [contador] = year
    val [contador] = valor
    let dCont = prompt('Deseja continuar inserindo informações? Pressione 1')
    if(dCont != '1'){
        cont = false
    }
    contador++
    console.log('O modelo: ' + modelo + ', ano ' + year + ' no valor de R$ ' + valor + ', foi inserido.')
}

console.log('Os modelos dos carros são: ' + model)
console.log('Os anos dos carros são: ' + ano)
console.log('Seu respectivos valores: ' + val)

for (let i = 0; i < val.length - 1; i++){
    for (let j = 0; j < val.length - i - 1; j++){
        if(val[j] > val [j + 1 ]){
            let modeloMaiorVal = model[j]
            model[j] = model[j + 1]
            model[j + 1] = modeloMaiorVal

            let anoMaiorVal = ano[j]
            ano[j] = ano[j + 1]
            ano[j + 1] = anoMaiorVal

            let maiorVal = val[j]
            val[j] = val [j + 1]
            val[j + 1] = maiorVal
        }
    }
}

console.log('Ordem dos carros por preço: ')
for (let i = 0; i < model.length; i++){
    console.log(model[i] + ' - ' + ano[i] + ' - ' + val[i])
}