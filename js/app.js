cartao = document.querySelectorAll('.cartao')

function criar(){
    Array.from(cartao).map(function(elemento, indice, arrayBase){

        const conteudo = elemento.querySelector('h3').textContent;
    
        const cor = getComputedStyle(elemento).backgroundColor
    
        const passw = document.getElementById('pass')

        const num = document.querySelector('.num').value
    
        console.log({conteudo: conteudo, cor: cor, font: getComputedStyle(elemento).fontFamily, password: passw.value, numero: num})
    
    })

    var p = document.getElementById('p')
    var q = document.getElementById('q')

    p.innerHTML = Array.from(cartao).length + "Cartões encontrados!"

    var passw = document.getElementById('pass')
    
    const num = document.querySelector('.num')

    q.innerHTML = "não digite senhas em qualquer lugar! Você digitou: " + passw.value + "<br> Número escolhido: " + num.value

}
