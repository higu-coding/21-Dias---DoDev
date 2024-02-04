class Carro {
    nome
    poten
    velMax
    acel
    constructor(Nome, Poten, VelMax, Acel){
        this.nome = Nome
        this.poten = Poten
        this.velMax = VelMax
        this.acel = Acel
    }
    Calcular(distancia){
        let resultado = distancia / (this.velMax / this.acel )
        return resultado
    }
}

class Corrida {
    nome
    tipo
    dist
    part 
    venc
    constructor(Nome, Tipo, Dist){
        this.nome = Nome
        this.tipo = Tipo
        this.dist = Dist
        this.part = []
        this.venc = ''
    }
    DefGanhador(){
        let mTime = this.part[0].Calcular(this.distancia)
        let winner = this.part[0]
        
        for (let i = 1; i < this.part.length; i++){
            let tempo = this.part[i].Calcular(this.distancia)
            if(tempo < mTime){
                mTime = tempo
                winner = this.part[i]
            }
        }
        return this.venc = winner
    }

    ShowVencedor(){
        alert('O time vencedor é ' + this.venc.nome)
    }
}

let race = new Corrida ('Canada', 'Rally', 6000)
race.part[0] = new Carro ('Fusca', 200, 120, 10)
race.part[1] = new Carro ('Ford KA', 180, 200, 5)
race.part[2] = new Carro ('Opala', 350, 200, 2)

race.DefGanhador()
race.ShowVencedor()