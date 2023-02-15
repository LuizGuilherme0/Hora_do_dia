function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    //msg.innerHTML = `Agora são aproximadamente ${hora} horas`

    if (hora >=0 && hora <12){
        img.src = 'pexels-simon-berger-1266810.jpg'
        document.body.style.background = '#e2cd9f'
        var b1 = window.document.getElementById('msg')
        b1.innerText = `Olá bom dia 😊, são aproximadamente ${hora} horas`
        

    } else if (hora >= 12 && hora <=18){
        img.src = 'pexels-george-desipris-858241.jpg'
        document.body.style.background = '#b9846f'
        var b2 = window.document.getElementById('msg')
        b2.innerText = `Olá boa tarde 😊, são aproximadamente ${hora} horas`

    } else {
        img.src = 'pexels-reynaldo-brigworkz-brigantty-771883.jpg'
        document.body.style.background = '#515154'
        var b3 = window.document.getElementById('msg')
        b3.innerText = `Olá boa noite 😊, são aproximadamente ${hora} horas`
    }
}