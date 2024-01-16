let fome = prompt('Está com fome? Sim ou não')
let money = prompt('Possui dinheiro em mãos? Sim ou não')
let rest = prompt('O restaurante está aberto? Sim ou não')

if(fome === 'Não' || money === 'Não'){
    console.log('Hoje a janta será em casa');
}else if(fome === 'Sim' && rest === 'Não'){
    console.log('Peça um delivery!');
}else{
    console.log('Hoje o jantar será no seu restaurante preferido!');
}