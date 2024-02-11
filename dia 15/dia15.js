let array1 = [1, 2, 3, 4, 5,22,22,22];
let array2 = [3, 4, 5, 6, 7,22,22,22];

function numComum (array1, array2){
            // "SET" é um conjunto, uma estrutura de dados que armazena coleções de valores únicos
    let set1 = new Set (array1)
    let set2 = new Set (array2)

    let numbComum = new Set()

    for(let num of set1){
        if(set2.has(num)){
            numbComum.add(num)
        }
    }
    return Array.from(numbComum)
}

let numbComum = numComum (array1, array2)
console.log(numbComum)