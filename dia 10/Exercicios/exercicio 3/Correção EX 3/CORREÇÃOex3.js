//CRIANDO VARIAVEIS
let array = []
let arrayInvertido = []
let quantidade = parseInt(prompt("Digite a quantidade de números para inserir no array"))
//POPULANDO O ARRAY
for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "° número"))
    array [i] = numero
}

console.log("Array original: " + array)

//INVERTENDO O ARRAY
let contador = quantidade
for(let i = 0; i < 5; i++){
    arrayInvertido[i] = array[contador]
    contador--
}
console.log("Array invertido: " + arrayInvertido)