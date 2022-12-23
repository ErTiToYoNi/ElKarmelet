function main(){
  document.querySelectorAll('*').forEach(el => {
    console.log("pase");
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log('Element que desquadra: ', el);
    }
  });
  
}
document.addEventListener("DOMContentLoaded",main);