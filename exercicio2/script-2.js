function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'children_boy.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'young-boy.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'man.jpg')
            } else {
                //adulto
                img.setAttribute('src', 'old-man.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'children_girl.jpg')
            } else if (idade <= 21){
                //jovem
                img.setAttribute('src', 'young_girl.jpg')
            } else if (idade < 50){
                //adulto
                imng.setAttribute('src', 'woman.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'old-woman.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}