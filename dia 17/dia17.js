
class Hotel{
    Id
    Nome
    Categ
    End
    Tel
    constructor(id, nome, categ, end, tel){
        this.Id = id
        this.Nome = nome
        this.Categ = categ
        this.End = end
        this.Tel = tel
    }
}

class Reserv{
    Id
    IdHotel
    NomeResp
    DEntrada
    DSaida
    constructor(id, idHotel, nomeResp, dEntrada, dSaida){
        this.Id = id
        this.IdHotel = idHotel
        this.NomeResp = nomeResp
        this.DEntrada = dEntrada
        this.DSaida = dSaida
    }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function CadHotel(){
    let nomeH = prompt('Digite o nome do hotel:')
    let categoriaH = prompt('Qual a categoria do hotel?')
    let enderecoH = prompt('Digite o endereço do hotel:')
    let telH = prompt('Digite o telefone do hotel:')
    let hotel = new Hotel(idHotel, nomeH, categoriaH, enderecoH, telH)
    idHotel++
    hoteis.push(hotel)
}

function CadReserv(){
    let idHotel 
    let exist = false
    do {
        idHotel = parseInt(prompt('Digite o ID:')) // O ID COMEÇA NO NUMERO '1'
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.length
                exist = true
            } else if( i == hoteis.length - 1){
                console.log('Não existe este ID em nossos dados, cadastre um ID válido')
            }
        }
    }while (!exist)
    let nome = prompt('Nome do responsável:')
    let diaEntrada = parseInt(prompt('Dia de entrada:'))
    let diaSaida
    do {
        diaSaida = parseInt(prompt('Dia da saida:'))
        if (diaSaida < diaEntrada) {
            console.log('O dia da saida precisa ser maior que o dia da entrada!!')
        }
    }while (diaSaida < diaEntrada)
    let reserva = new Reserv(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}
function ProcResHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.IdHotel) {
            let i = idHotel -1
            console.log('HOTEL:', hoteis[i].Nome)
            console.log('RESPONSÁVEL:', reserva.NomeResp)
            console.log('Dia de entrada:', reserva.DEntrada)
            console.log('Dia de saída:', reserva.DSaida)
        }
    })
}

function ProcResPHot (idReserva){
    let idHotel = reservas[idReserva -1].IdHotel
    console.log('Hotel:', hoteis[idHotel -1].Nome)
    console.log('endereço:', hoteis[idHotel -1].End)
    console.log('dia de entrada:', reservas[idReserva -1].DEntrada)
    console.log('dia de saide:', reservas[idReserva -1].DSaida)
}

function ProcReserPNome(nome){
    for (let i = 0; i < reservas.length; i++){
        if (nome == reservas[i].NomeResp){
            console.log('ID da reserva: ' + reservas[i].Id)
            console.log('Hotel: ' + hoteis[(reservas[i].IdHotel) - 1].Nome)
        }
    }
}

function ProchotPCateg(categoriaH){
    let procHot = []
    for (let i = 0; i < hoteis.length; i++){
        if (categoriaH == hoteis[i].Categ){
            procHot.push(hoteis[i].Nome)
        }
    }
    return procHot
}

function AttTelefone(idHotel, telH){
    hoteis[idHotel -1].Tel = telH
    console.log('O numero de telefone foi atualizado!')
}

let continuar = true
do {
    let opcao = prompt('Escolha uma opção: \n1 = Cadastrar hotel \n2 = Cadastrar reserva \n3 = Procurar reserva' + '\n4 = Procurar hotel pela reserva \n5 = Procurar pelo responsavel \n6 = Procurar hoteis por categoria' + '\n7 = Atualizar telefone de um hotel \n8 = Encerrar o programa')

    switch(opcao) {
        case '1': 
            CadHotel()
        break;
        case '2': 
            CadReserv()
        break;
        case '3':
            ProcResHotel(prompt('Digite o ID do hotel:'))
        break;
        case '4':
            ProcResPHot(prompt('Digite o ID da reserva:'))
        break;
        case '5':
            ProcReserPNome(prompt('Digite o nome da pessoa responsavel pela reserva:'))
        break;
        case '6':
            let hotproc = ProchotPCateg(parseInt(prompt('Digite a categoria que deseja:')))
            console.log(hotproc)
        break;
        case '7':
            let idhot = parseInt(prompt('Digite o id do hotel que deseja atualizar:'))
            let tele = prompt('Digite o novo telefone')
            AttTelefone(idhot, tele)
        break;
        case '8':
            console.log('Programa encerrado!')
            continuar = false
        break;
        default:
            console.log('Opcao invalida! Tente novamente.')
        break;
    }
}while(continuar)