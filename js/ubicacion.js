function main(){
    document.querySelector('.boton_buscar').addEventListener("click",()=>{
        window.open("https://www.google.es/maps/dir//Restaurante+El+Karmelet,+Carrer+Sant+Judes,+28,+03727+Xal%C3%B3,+Alicante/@38.7410521,-0.0131732,17z/data=!4m19!1m9!3m8!1s0xd61fdacc8b82ee5:0xbdb7bf6983ddc05b!2sRestaurante+El+Karmelet!5m2!4m1!1i2!8m2!3d38.7410719!4d-0.0110369!4m8!1m0!1m5!1m1!1s0xd61fdacc8b82ee5:0xbdb7bf6983ddc05b!2m2!1d-0.0110369!2d38.7410719!3e3?hl=es",'_blank')
    })
}
document.addEventListener("DOMContentLoaded",main);