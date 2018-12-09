const conhecimentos = document.querySelector(".conhecimentos");
const botaoAdd = document.querySelector(".botaoAdd");
const botaoCadastrar = document.querySelector(".botaoCadastrar");

function adicionarInput () {
    console.log("ok");
    let node = document.createElement("INPUT");
    node.type = "text";
    conhecimentos.appendChild(node);
} 
function arcoraParaHome () {
    window.location.href = "home.html";
}

botaoCadastrar.onclick = arcoraParaHome;
botaoAdd.onclick = adicionarInput;