class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd;
    }
    ExibirInformacoes(){
        console.log("Informações do Computador:")
        console.log(`Tipo: ${this.Tipo}`)
        console.log(`Processador: ${this.Processador}`)
        console.log(`Video: ${this.Video}`)
        console.log(`Armazenamento: ${this.Armazenamento}`)
        console.log(`Memória RAM: ${this.MemoriaRam}`)
        console.log(`SSD: ${this.Ssd}`)
    }
}

//EXEMPLO DE USO
const meuComputador = new Computador("notebook", "Ryzen 7", "Dedicado", 1000, 16, true)
meuComputador.ExibirInformacoes();