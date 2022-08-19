//Mecanismo de acesso ao site e escolha do número de cartas
let acesso = "não"
let nCartas = Number(prompt("Com quantas cartas deseja jogar?"))

while(acesso==="não"){
    
    if( nCartas % 2===0 && 4<=nCartas && 14>=nCartas){
        alert("Bom Jogo!")
        acesso="sim"
    }else{
        acesso="não"
        nCartas= Number(prompt("Você precisa digitar um número par entre 4 e 14"))
    }
}
//Mecanismo de acesso ao site e escolha do número de cartas
function comparador() { 
    return Math.random() - 0.5; 
}
//Mecanismo de distribuição de cartas

const baralho = ['<div class="card carta1 "></div>','<div class="card carta2"></div>','<div class="card carta3 "></div>','<div class="card carta4 "></div>','<div class="card carta5 "></div>','<div class="card carta6 "></div>','<div class="card carta7 "></div>' ]
const baralho2 = ['<div class="card carta1 "></div>','<div class="card carta2"></div>','<div class="card carta3 "></div>','<div class="card carta4 "></div>','<div class="card carta5 "></div>','<div class="card carta6 "></div>','<div class="card carta7 "></div>' ]

//adicionar a metade de nCartas no innerhtml 

function AdicaoDeCartas(cartas){
    const segundaleva = []
    const jogo = document.querySelector('.jogo')
    baralho.sort(comparador)
    for(i = 0;i<(cartas/2);i++){
        jogo.innerHTML = jogo.innerHTML + baralho[i]
        segundaleva.push(baralho[i])
    }
    segundaleva.sort(comparador)
    console.log(segundaleva)
    segundaleva.sort(comparador)
    for(e=0;e < segundaleva.length; e++){
        jogo.innerHTML = jogo.innerHTML + segundaleva[e]
    }
    
    
}
AdicaoDeCartas(nCartas)

