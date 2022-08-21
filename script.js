let acesso = "não"

let nCartas = Number(prompt("Com quantas cartas deseja jogar?"))

const cabeludo = 'virada_cabeludo'

const trenzin = 'virada_trenzin'

const metal = 'virada_metal'

const unicornio = 'virada_unicornio'

const swag ='virada_swag'

const ariba = 'virada_ariba'

const triplo = 'virada_triplo'

const baralho = ['<div onclick="virada_cabeludo(this,cabeludo)"class="card carta1 "></div>','<div onclick="virada_trenzin(this,trenzin)" class="card carta2"></div>','<div onclick="virada_metal(this,metal)" class="card carta3 "></div>','<div onclick="virada_unicornio(this,unicornio)" class="card carta4 "></div>','<div onclick="virada_swag(this,swag)" class="card carta5 "></div>','<div onclick="virada_ariba(this,ariba)" class="card carta6 "></div>','<div onclick="virada_triplo(this,triplo)" class="card carta7 "></div>' ]



//Até aqui Declaração de variáveis
function comparador() {
    return Math.random() - 0.5; 
}
function AdicaoDeCartas(cartas){
    const segundaleva = []
    const jogo = document.querySelector('.jogo')
    baralho.sort(comparador)
    for(i = 0;i<(cartas/2);i++){
        jogo.innerHTML = jogo.innerHTML + baralho[i]
        segundaleva.push(baralho[i])
    }

    segundaleva.sort(comparador)
    for(e=0;e < segundaleva.length; e++){
        jogo.innerHTML = jogo.innerHTML + segundaleva[e]
    }
    
    
}
function virada_cabeludo(carta,classeBack) {
    carta.classList.add(classeBack)
    
}
function virada_trenzin(carta,classeBack) {
    carta.classList.add(classeBack)
}
function virada_metal(carta,classeBack) {
    carta.classList.add(classeBack)
}
function virada_unicornio(carta,classeBack) {
    carta.classList.add(classeBack)
}
function virada_swag(carta,classeBack) {
    carta.classList.add(classeBack)
}
function virada_ariba(carta,classeBack) {
    carta.classList.add(classeBack)
}
function virada_triplo(carta,classeBack) {
    carta.classList.add(classeBack)
}

//Até aqui declaração de funções

while(acesso==="não"){                                           //Verifica quantas cartas
    
    if( nCartas % 2===0 && 4<=nCartas && 14>=nCartas){
        alert("Bom Jogo!")
        acesso="sim"
    }else{
        acesso="não"
        nCartas= Number(prompt("Você precisa digitar um número par entre 4 e 14"))
    }
}





AdicaoDeCartas(nCartas)

