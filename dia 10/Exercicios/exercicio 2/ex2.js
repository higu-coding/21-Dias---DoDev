let array = []
let num = 0

while(num < 5){
    const elemento = parseInt(prompt(`Digite o elemento ${num + 1}:`));
    array [num] = elemento
    num++
}
console.log('Array: ' + array)

let invNum = array.reverse()
console.log('Array invertido: ' + invNum) 