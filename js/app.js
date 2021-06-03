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

lista.forEach(listar)


function teste(){

    var seuNome = document.getElementById('seunome')
    var seuNomeResult = document.getElementById('seunomeresult')

   const nomeCurto1 = seuNome.value

    if (seuNome.value.length > 5){
        seuNomeResult.value = nomeCurto1;
    } if ( seuNome.value.length < 6){
        seuNomeResult.value = 'Nome muito curto';
    } if (seuNome.value.length > 12){
        seuNomeResult.value = 'Nome muito grande'
    }

    switch (seuNome.value){
        case 'lucilua81':
            seuNomeResult.value = 'Olá luci'
            break
            case 'lolalola81':
            seuNomeResult.value = 'Olá lola'
            break               
    }
}


function triangulo(ladoA, ladoB, ladoC){

    var ladoA = document.getElementById('ladoA').value
    var ladoB = document.getElementById('ladoB').value
    var ladoC = document.getElementById('ladoC').value

    var result = document.getElementById('resulTri')

    if (ladoA === ladoB &&  ladoB === ladoC){
        return result.textContent = 'Equilátero'
    }
    else if((ladoA === ladoC && ladoA != ladoB) || (ladoB === ladoC && ladoC != ladoA) || (ladoA === ladoB && ladoB != ladoC) ){
        return result.textContent = 'Isósceles'
    }
    else{
        return result.textContent = 'Escaleno'
    }
}