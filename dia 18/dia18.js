class Livro{
    Titulo
    Autor
    Editora
    AnoDePub
    Disponibilidade
    constructor(titulo, autor, editora, anodepub, disponibilidade){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePub = anodepub
        this.Disponibilidade = true
    }
}
let livros = []

livros.push(new Livro ('livro1', 'Joao', 'editora A', 2000))
livros.push(new Livro ('livro2', 'Hiago', 'editora C', 1999))
livros.push(new Livro ('livro3', 'Gustavo', 'editora D', 2010))
livros.push(new Livro ('livro4', 'Pedro', 'editora C', 2020))
livros.push(new Livro ('livro5', 'Sara', 'editora E', 2024))

class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome, endereco, telefone, acervo){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = []  // SE FOR DEFINIDO COMO UM ARRAY NA PROPRIEDADE, TBM PRECISA ESTAR COMO ARRAY NO CONSTRUTOR!!
    }

    BuscarLivroPorTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                console.log(livro);
            }
        });
    }
    
    EmprestarLivro(titulo){
        let emprestar = false
        this.AcervoLivros.forEach(livro => {
            if(livro.Titulo == titulo){
                if(livro.Disponibilidade == true){
                    livro.Disponibilidade = false
                    emprestar = false
                }
            }
        });
        if(emprestar) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo){
        livros.forEach(livro => {
            if (livro.Titulo == titulo){
                livro.Disponibilidade = true
                console.log('Livro Devolvido')
            }
        })
    }
}

let bib = new Biblioteca('Biblioteca DODEV', '123456', 'São Paulo')

bib.BuscarLivroPorTitulo('livro5')
bib.EmprestarLivro('livro1')
bib.DevolverLivro('livro1')