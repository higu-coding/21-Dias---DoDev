let array = []
let num = 0 
let opcao = Number(prompt('Quantos numeros deseja inserir?'))
while(num < opcao){
    const elemento = parseInt(prompt(`Digite o elemento ${num + 1}:`));
    array [num] = elemento
    num++
}
console.log('Array: ' + array)

let invNum = array.reverse()
console.log('Array invertido: ' + invNum) 