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

function tocar(){
    new Audio('img/camSound.mp3').play();
}

document.querySelector('.btn-c').addEventListener('click', function(){document.getElementById('interno').classList.toggle('interno-2')})


const lista = ["Canetas", "Estojos", "mochilas", "tesouras", "cadernos"]

function listar(nome, indice){
 document.getElementById('pl').textContent = `${indice + 1}. ${nome}`

 console.log(`${indice + 1}. ${nome}`)
}

lista.forEach(listar, listando => console.log(listando) )

