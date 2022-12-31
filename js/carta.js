function main(){
    document.querySelector(".menu-1").style.display = "none";
    document.getElementById('menu').addEventListener("click",mostrar);
}

function mostrar(){
    let menu = document.querySelector(".menu-1");
    if(menu.style.display !='none'){
        menu.style.display = 'none';
    }else{
        console.log("hola")
        menu.style.display = 'block'
        console.log(menu);
    }
}
document.addEventListener("DOMContentLoaded",main);