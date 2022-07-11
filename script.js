const $ = document.querySelector.bind(document)
let solucao = $('.solucao')
let butao = $('#butao')
let valor1 = $('#txt-valor1')
let valor2 = $('#txt-valor2')

function trocarCaracter() {
    if (valor1.value.length === 0 || valor2.value.length === 0) {
        alert('[ERRO]!\n Nenhum dos campos têm que estar vazio!')
    } else {
        window.localStorage.setItem('valor1', valor1.value)
        valor1.value = valor2.value
        valor2.value = window.localStorage.getItem('valor1')
            /* Outra forma que exige matématica
             let a = +valor1.value
             let b = +valor2.value
             a = a + b
             b = a - b
             a = a - b
             valor1.value = a
             valor2.value = b
             
            */

        solucao.style.visibility = "visible";
        solucao.innerHTML = `O Valor de A: ${valor1.value}<br><br>`
        solucao.innerHTML += `O Valor de B: ${valor2.value}`
    }

}
butao.addEventListener('click', trocarCaracter)