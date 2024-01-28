let num = parseInt(Number(prompt('Digite um numero')))
let fibo = []
fibo [0] = num - 1
fibo [1] = num

for (let cont = 2; cont < 10; cont++){
    fibo[cont] = fibo[cont - 1] + fibo [cont - 2]
}
console.log('A soma fibonacci: ' + fibo)