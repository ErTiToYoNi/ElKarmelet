function main(){
    document.querySelector(".reservar").addEventListener("click",redirect,false);
}
function redirect(){
    window.location.href = 'reservas.html';
}
document.addEventListener("DOMContentLoaded",main);