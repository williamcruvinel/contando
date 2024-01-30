function contar(){
    let vInicio = document.getElementById('idInicio')
    let vFim = document.getElementById('idFim')
    let vPasso = document.getElementById('idPasso')
    let res = document.getElementById('res')

    if (vInicio.value.length == 0 || vFim.value.length == 0 || vPasso.value.length == 0){
        alert('[ERRO] Preencha os dados')
        res.innerHTML = `Impocivel Contar`
    }
    else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(vInicio.value)
        let f = Number(vFim.value)
        let p = Number(vPasso.value)
        if (p <=0){
            alert('Passo Inválido, considerando Passo [ 1 ]')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for( let cont = i; cont <=  f; cont += p) {
                res.innerHTML += ` ${cont} -`
            }
        }
        else{
            //Contagem decrecente
            for( let cont = i; cont >=  f; cont -= p) {
                res.innerHTML += ` ${cont} -`//  \U{1F448} Emoji
            }
        }
        res.innerHTML += ` Fim \u{1F3C1}`
    }
}