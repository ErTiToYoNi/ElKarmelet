function main(){
    document.querySelector(".menu-1").style.display = "none";
    document.getElementById('menu').addEventListener("click",mostrar);
    document.querySelector(".reservar").addEventListener("click",redirect,false);
}
function redirect(){
    window.location.href = 'reservas.html';
}
function mostrar(){
    let menu = document.querySelector(".menu-1");
    if(menu.style.display !='none'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block'
    }
}
document.addEventListener("DOMContentLoaded",main);