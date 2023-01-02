function main(){
    document.querySelector(".flecha-cerrar").addEventListener("click",ocultarmenu,false)
    document.querySelector(".flecha-abrir").addEventListener("click",mostrarmenu,false)
}
function ocultarmenu(){
    let menu = document.getElementById("menu").style.display = "none";
}
function  mostrarmenu(){
    let menu = document.getElementById("menu").style.display = "block";
}
document.addEventListener("DOMContentLoaded",main)