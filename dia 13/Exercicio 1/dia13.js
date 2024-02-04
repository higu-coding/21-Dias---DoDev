let tipo = prompt('Qual o tipo do seu computador? Desktop ou Notebook')
let proces = prompt('Qual o nome do seu processador?')
let video = prompt('Qual o tipo de video do seu computador? Dedicado ou Integrado')
let armaz = Number(prompt('Quantos GB de armazenamento tem o seu computador?'))
let mRam = Number(prompt('Quantos GB de RAM tem no seu computador?'))
let ssd = true

class Setup{
    tipo
    proces
    video
    armaz
    mRam
    ssd
    constructor(tipo, proces, video, armaz, mRam, ssd){
        this.tipo = tipo
        this.proces = proces
        this.video = video
        this.armaz = armaz
        this.mRam = mRam
        this.ssd = ssd
    }
    show(){
        console.log("Meu setup é " + this.tipo + ', possui um processador ' + this.proces + ', possui video ' + this.video + ', possui ' + this.armaz + 'GB de armazenamento, e possui ' + this.mRam + ' GB de memoria RAM' + `${this.ssd}`)
    }
}

let equip = new Setup(tipo, proces, video, armaz, mRam, ssd) 
let continuar = true
let i = 0

while(continuar){
    let wCont = prompt('Deseja continuar? S / N')
    if (wCont != 'S'){
        continuar = false
    }
}