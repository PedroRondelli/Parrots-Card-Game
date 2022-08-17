//Mecanismo de acesso ao site e escolha do número de cartas
let acesso = "não"
let nCartas = Number(prompt("Com quantas cartas deseja jogar?"))
while(acesso==="não"){
    
    if(nCartas%2===0 && 2<=nCartas<=14){
        alert("Bom Jogo!")
        acesso="sim"
    }else{
        acesso="não"
        nCartas= Number(prompt("Você precisa digitar um número par entre 2 e 14"))
    }
}