function main(){
    document.querySelector(".flecha-cerrar").addEventListener("click",ocultarmenu,false)
    document.querySelector(".flecha-abrir").addEventListener("click",mostrarmenu,false)
    document.querySelector('.boton_volver').addEventListener("click",()=>{
        window.location.href = 'index.html';
    })
}
function ocultarmenu(){
    let menu = document.getElementById("menu").style.display = "none";
}
function  mostrarmenu(){
    let menu = document.getElementById("menu").style.display = "block";
}
function redirect(){

}
document.addEventListener("DOMContentLoaded",main)