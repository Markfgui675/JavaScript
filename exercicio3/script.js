
function contar(){
    var start = document.getElementById('txtstart')
    var end = document.getElementById('txtend')
    var passo = document.getElementById('passo')
    var visor = document.getElementById('visor')
    if( Number(passo.value) == 0){
        window.alert('ERRO! O elemento PASSO não poder ser 0.')
    } else if(Number(start.value) == 0){
        window.alert('ERRO! Informe o INÍCIO da contagem.')
    } else if (Number(start.value) < Number(end.value)){
        
        
    } else {
        var c = Number(start.value)
        var passo1 = Number(passo.value)
        while ( c <= Number(end.value)){
            visor.innerHTML = `${c}`
            c++
        }
    }
}
