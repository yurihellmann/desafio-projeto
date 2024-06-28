let nomePersonagem = "Yuri"
let quantidadeExp = 12001
let eloPersonagem = ""

switch(true){
    case quantidadeExp <= 1000:
        eloPersonagem = "Ferro"
        break

    case quantidadeExp > 1000:
    case quantidadeExp <= 2000:
        eloPersonagem = "Bronze"

    case quantidadeExp > 2000:
    case quantidadeExp <= 5000:
        eloPersonagem = "Prata"

    case quantidadeExp > 5000:
    case quantidadeExp <= 7000:
        eloPersonagem = "Ouro"

    case quantidadeExp > 7000:
    case quantidadeExp <= 8000:
        eloPersonagem = "Platina"

    case quantidadeExp > 8000:
    case quantidadeExp <= 9000:
        eloPersonagem = "Ascendente"

    case quantidadeExp > 9000:
    case quantidadeExp <= 10000:
        eloPersonagem = "Imortal"

    case quantidadeExp > 10000:
        eloPersonagem = "Radiante"
}

console.log("O herói de nome **" + nomePersonagem + "** está no nível de **" + eloPersonagem + "**")