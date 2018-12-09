//lógica para o alert

const botoesIndicar = document.querySelectorAll(".buttonIndicar");
const botoesSangue = document.querySelectorAll(".buttonSangue");
const alert = document.querySelector(".alert");
const alertSangue = document.querySelector(".alertSangue")
const indicar = document.querySelector("#indicar");
const okay = document.querySelector("#okay");

function aparecerAlert() {
    alert.style.display = "flex";
}
function desaparecerAlert() {
    alert.style.display = "";
}

function aparecerAlertSangue() {
    alertSangue.style.display = "flex";
}
function desaparecerAlertSangue() {
    alertSangue.style.display = "";
}

for(let item of botoesIndicar) {
    item.onclick = aparecerAlert;
}
for(let item of botoesSangue) {
    item.onclick = aparecerAlertSangue;
}
indicar.onclick = desaparecerAlert;
okay.onclick = desaparecerAlertSangue;

//lógica para o filtro

const filtros = document.querySelectorAll(".filtros");
const filtroVagas = filtros[0];
const filtroSangue = filtros[1];
const filtroDoacao = filtros[2];

let vagas = document.querySelectorAll(".tituloDaVaga");
let sangues = document.querySelectorAll(".tituloDeSangue");
let doacoes = document.querySelectorAll(".tituloDoacao");

// pegar o pai do titulo.
function pegarPai(lista) {
    let listaAuxiliar = [];
    for(let i = 0; i < lista.length; i++) {
        listaAuxiliar[i] = lista[i].parentNode;
    }
    return listaAuxiliar;
}
vagas = pegarPai(vagas);
sangues = pegarPai(sangues);
doacoes = pegarPai(doacoes);

//filtrar
function atualizar(filtro, lista) {
    if(filtro.checked == true) {
        for(let item of lista) {
            item.style.display = "flex";
        }
    } else if(filtro.checked == false) {
        for(let item of lista) {
            item.style.display = "none";
        }
    }
}
setInterval(() => {
    atualizar(filtroVagas, vagas);
    atualizar(filtroSangue, sangues);
    atualizar(filtroDoacao, doacoes);
}, 300);