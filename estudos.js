function carregar(){
    var nome = prompt('Qual o seu nome?')
    if(nome == ''){

        var nome = 'Senhor(a)'
    }
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var horas = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var horaAtual = horas + ":" + min + ":" + seg
    document.body.style.display ='block'
    msg.innerHTML = `Agora são ${horas} horas.`
    if(horas >= 0 && horas < 12){
        //BOM DIA
        msg.innerHTML = `Oi ${nome}, agora são ${horaAtual} horas, BOM DIA!!!.`
        img.src = 'fotomanha.png'
        document.body.style.background = 'yellow'



    }else if(horas >= 12 && horas <= 18){
        //BOA TARDE
        msg.innerHTML = `Oi ${nome}, agora são ${horaAtual} horas, BOA TARDE!!!`
        img.src = 'fototarde.png'
        document.body.style.background = 'orange'

        


    }else{
        //BOA NOITE
        msg.innerHTML = `Oi ${nome}, agora são ${horaAtual} horas, BOA NOITE!!!`
        img.src = 'fotonoite.png'
        document.body.style.background = '#022743'
    }

}

