const temFome = prompt('Você está com fome? Sim ou não')
const temDinheiro = prompt('Você tem dinheiro? Sim ou não')
const restauranteAberto = prompt('O restaurante está aberto? Sim ou não')

if(temFome === 'Não' || temDinheiro === 'Não'){
    console.log('Hoje a janta será em casa');
}else if(temFome === 'Sim' && restauranteAberto === 'Não'){
    console.log('Hoje o jantar será no seu restaurante preferido!');
}else{
    console.log('Peça um delivery!');
}