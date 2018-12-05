let slide = document.querySelectorAll(".mae>div");
let botoes = document.querySelectorAll(".botoesNavegacao");
let contador = 0;

function rodar (){
    slide[contador].style.display="block";
    botoes[contador].style.backgroundColor="#5aaca6";
    if(contador !== 0){
        slide[contador-1].style.display="none";
        botoes[contador-1].style.backgroundColor="white";
    }
    else{
        slide[slide.length-1].style.display="none";
        botoes[botoes.length-1].style.backgroundColor="white";
    }
    contador++;
    if(contador ===4)
    contador = 0;
}

setInterval(rodar, 1500);