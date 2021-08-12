function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementsByClassName('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<h2>Agora são ${hora} horas.</h2>`
    if (hora >= 0 && hora < 12){
        img.src = 'morning.jfif'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        document.body.style.background = '#b9846f'
        img.src = 'afternoon.jfif'
    } else{
        document.body.style.background = '#515154'
        img.src = 'night.jfif'
    }
}