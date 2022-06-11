var nome = prompt('Qual o seu nome?')

if(nome == ''){

    var nome = 'Senhor(a)'
}  

function horaAtual(){
    
    
    document.body.style.display ='block'  
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var horas = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    if(horas < 10){ horas = '0' + horas }
    if(min < 10){ min ='0' + min }
    if(seg < 10){ seg ='0' + seg }

    var horaAtual = horas + ":" + min + ":" + seg 


    msg.innerHTML = `Agora são ${horas} horas.`
    if(horas >= 0 && horas < 12){
        //BOM DIA
        msg.innerHTML = `Oi ${nome}, agora são <strong>${horaAtual}</strong> horas, <br><strong> BOM DIA!!!</strong>`
        img.src = 'fotomanha.png'
        document.body.style.background = 'yellow'



    }else if(horas >= 12 && horas <= 18){
        //BOA TARDE
        msg.innerHTML = `Oi ${nome}, agora são <strong>${horaAtual}</strong> horas, <br><strong> BOA TARDE!!!</strong>`
        img.src = 'fototarde.png'
        document.body.style.background = 'orange'

        


    }else{
        //BOA NOITE
        msg.innerHTML = `Oi ${nome}, agora são <strong>${horaAtual}</strong> horas, <br><strong> BOA NOITE!!!</strong>`
        img.src = 'fotonoite.png'
        document.body.style.background = '#022743'
    }
    
}
setInterval(horaAtual, 500)




