const alert = document.querySelector(".alert");
const cadastrarOng = document.querySelector(".botaoCadastrar");
const okay = document.querySelector("#okay");

function aparecerAlert() {
    alert.style.display = "flex";
}
function desaparecerAlert() {
    window.location.href = "home.html";
}
cadastrarOng.onclick = aparecerAlert;
okay.onclick = desaparecerAlert;