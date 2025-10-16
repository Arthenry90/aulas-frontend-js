
function gerarNomeFake (){
    let nomes = ["Joana", "Acrebiana","Marcoana", "Marcos"]

    // for (let i = 0; i< 4; i++){
    //     console.log("Bom dia",nomes[i])
    // }

    for(let i in nomes){
        console.log("Bom dia",nomes[i])
    }

    let pos = Math.floor(Math.random() * nomes.length)
    let nome = nomes[pos]

    sobrenomes = ["Siqueira", "Pereira", "Silva", "Jordão"]
    let sobre_randon = Math.floor(Math.random() * sobrenomes.length)

    sobrenome = sobrenomes[sobre_randon]
    return nome + " " + sobrenome

}

console.log(gerarNomeFake())