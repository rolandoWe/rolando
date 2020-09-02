var foto=document.querySelectorAll(".fotos");
var fondo=document.querySelector(".fondo");
var ponerFoto=document.querySelector(".poner-foto");
var x=document.querySelector(".Cerrar");
var secion=document.querySelector(".sec");

var f=function(ty){
    ponerFoto.src=ty;
    fondo.classList.toggle("poner-fondo");
    x.style.opacity="0"
}

foto.forEach(function(t){
    t.addEventListener("click",function(){
        f(t.getAttribute("src"))
    })
})

fondo.addEventListener("click",function(p){
    if(p.target != ponerFoto){
    fondo.classList.toggle("poner-fondo");
    x.style.opacity="1"
    
    }
})




var imagen=document.querySelector(".imag");

imagen.addEventListener("click",function(){
 secion.classList.toggle("poner_seccion")
})
x.addEventListener("click",function(){
    secion.classList.toggle("poner_seccion")
})
