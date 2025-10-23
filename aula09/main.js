function textBox(text , bord){
    space = ""
    for(let i=0;i< text.length;i++){
        space += bord
    }
    console.log(bord +space+ bord)
    console.log(bord +text+bord)
    console.log(bord +space+ bord)
}

textBox(" Oi GENTE" , "#")
textBox("Eita", "*")
// textBox("Opa")
// textBox("É")
// textBox("Não quero")