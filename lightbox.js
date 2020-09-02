var imagenes=document.querySelectorAll(".img-galeria");
var imagenesLight=document.querySelector(".agregar-imagen");
var hamburguer1=document.querySelector(".hamburger");
var contenedorLight=document.querySelector(".imagen-light");

imagenes.forEach(function(i){
    i.addEventListener("click",function(){
        aparecerImagen(i.getAttribute("src"))
    })
})

contenedorLight.addEventListener("click", (e)=>{
if(e.target!= imagenesLight){
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
}
})

var aparecerImagen= function(imagen){
    imagenesLight.src=imagen;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");

}