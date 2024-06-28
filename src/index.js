let nomePersonagem = ""
let quantidadeExp = 6000
let eloPersonagem = ""

switch(true){
    case quantidadeExp <= 1000:
        eloPersonagem = "Ferro"
        break

    case quantidadeExp > 1000:
    case quantidadeExp <= 2000:
        eloPersonagem = "Bronze"
        break

    case quantidadeExp > 2000:
    case quantidadeExp <= 5000:
        eloPersonagem = "Prata"
        break

    case quantidadeExp > 5000:
    case quantidadeExp <= 7000:
        eloPersonagem = "Ouro"
        break

    case quantidadeExp > 7000:
    case quantidadeExp <= 8000:
        eloPersonagem = "Platina"
        break

    case quantidadeExp > 8000:
    case quantidadeExp <= 9000:
        eloPersonagem = "Ascendente"
        break

    case quantidadeExp > 9000:
    case quantidadeExp <= 10000:
        eloPersonagem = "Imortal"
        break

    case quantidadeExp > 10000:
        eloPersonagem = "Radiante"
        break
}

console.log("O herói de nome **" + nomePersonagem + "** está no nível de **" + eloPersonagem + "**")