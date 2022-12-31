function main(){
    document.querySelector('button.noticia').addEventListener("click",()=>{
        window.location.href = 'noticias.html';
    })
}
document.addEventListener("DOMContentLoaded",main);