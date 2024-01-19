let num = parseInt(prompt('Digite um número'))
for (let i = num; i <= num + 2; i++){
    console.log('Tabuada do numero é: ' + i)
    for (let x = 0; x <= 10; x++){
        console.log(i + ' x ' + x + ' = ' + (i * x))
    }
}