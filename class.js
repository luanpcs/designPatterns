class Carro
{
    constructor (marca, modelo, ano, cor)
    {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }

    getInfos()
    {
        return [this.marca, this.modelo, this.ano, this.cor]
    }
}

const carro = new Carro ('VW', 'Gol', '2006', 'Branco')
console.log(carro.getInfos())