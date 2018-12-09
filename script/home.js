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