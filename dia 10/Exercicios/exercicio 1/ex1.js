let array = [];
let indices = []
let num = 0;
let contInd = 0

const numProc = parseInt(prompt("Digite o número que vai ser procurado:"))

while (num < 10) {
    const elemento = parseInt(prompt(`Digite o elemento ${num + 1}:`));
    array[num] = elemento;
    num++;
}

let i = 0

while (i < 10 && contInd < 10) {
    if (array[i] === numProc) {
        indices[contInd] = i;
        contInd++;
    }
    i++;
}
console.log(`O número ${numProc} foi encontrado nos índices: ${indices}`);