
function contar(){
    var ini = document.getElementById('txtstart')
    var fim = document.getElementById('txtend')
    var passo = document.getElementById('passo')
    var visor = document.getElementById('visor')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        visor.innerHTML = 'Impossível contar.'
        window.alert('[ERRO] Faltam dados!')
    } else if(Number(ini.value) < Number(fim.value)){
        //Contagem regressiva
        visor.innerHTML = '<strong>Contando</strong>...<br><br>'
        var i_2 = Number(ini.value)
        var f_2 = Number(fim.value)
        var p_2 = Number(passo.value)

        for( var c = f_2; c >= i_2 ; c += p_2){
            visor.innerHTML += `${c} \u{27A1}`            
        }
        visor.innerHTML += `\u{1F3C1}`
    } else {
        //Contagem crescente
        visor.innerHTML = '<strong>Contando</strong>...<br><br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passo inválido! Considerando Passo')
            p = 1
        }

        for( var c = i; c <= f; c += p){
            visor.innerHTML += `${c} \u{27A1}`
        }
        visor.innerHTML += `\u{1F3C1}`
    }
}
