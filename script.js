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
    if(contador === 4)
    contador = 0;
    
}

botoes[0].onclick = () =>{
    slide[0].style.display = 'block';
    slide[1].style.display = 'none';
    slide[2].style.display = 'none';
    slide[3].style.display = 'none';
    botoes[0].style.backgroundColor = '#5aaca6';
    botoes[1].style.backgroundColor = 'white';
    botoes[2].style.backgroundColor = 'white';
    botoes[3].style.backgroundColor = 'white';
    contador = 0;
    stop();
}
botoes[1].onclick = () =>{
    slide[0].style.display = 'none';
    slide[1].style.display = 'block';
    slide[2].style.display = 'none';
    slide[3].style.display = 'none';
    botoes[0].style.backgroundColor = 'white';
    botoes[1].style.backgroundColor = '#5aaca6';
    botoes[2].style.backgroundColor = 'white';
    botoes[3].style.backgroundColor = 'white';
    contador = 1;
    stop();
}
botoes[2].onclick = () =>{
    slide[0].style.display = 'none';
    slide[1].style.display = 'none';
    slide[2].style.display = 'block';
    slide[3].style.display = 'none';
    botoes[0].style.backgroundColor = 'white';
    botoes[1].style.backgroundColor = 'white';
    botoes[2].style.backgroundColor = '#5aaca6';
    botoes[3].style.backgroundColor = 'white';
    contador = 2;
    stop();
}
botoes[3].onclick = () =>{
    slide[0].style.display = 'none';
    slide[1].style.display = 'none';
    slide[2].style.display = 'none';
    slide[3].style.display = 'block';
    botoes[0].style.backgroundColor = 'white';
    botoes[1].style.backgroundColor = 'white';
    botoes[2].style.backgroundColor = 'white';
    botoes[3].style.backgroundColor = '#5aaca6';
    contador = 3;
    stop();

}

let temp = setInterval(rodar, 1500);


function ir (){
    setInterval(rodar, 3000);
}


function stop (){
    clearInterval(temp);
    
}


let buttons1 = document.querySelector('.btn1');
let buttons2 = document.querySelector('.btn2');
let div1 = document.querySelector('.informacao div:nth-child(1)');
let div2 = document.querySelector('.informacao div:nth-child(2)');
let div3 = document.querySelector('.informacao div:nth-child(3)');

div1.style.background = 'url(img/img1.jpg)';