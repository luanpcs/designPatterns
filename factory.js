const carro = (marca, modelo, ano, cor) =>
({
    marca,
    modelo, 
    ano, 
    cor,
    getInfos: () => ({marca, modelo, ano, cor})
})

const Carro = carro ('VW', 'Gol', '2006', 'Branco')
console.log(carro.getInfos())