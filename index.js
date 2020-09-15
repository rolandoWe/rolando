
var imas=document.querySelectorAll(".fot");
var fon=document.querySelector(".fondo");
var ponerfot=document.querySelector(".ponerFoto");

var j=r=>{
    ponerfot.src=r;
    fon.classList.toggle("ponerFondo")

}

imas.forEach(f=>{
f.addEventListener("click",()=>{
    j(f.getAttribute("src"))
})
})

fon.addEventListener("click",r=>{
    if(r.target != ponerfot){
        fon.classList.toggle("ponerFondo")
    }
})

var men=document.querySelector(".menu");
var nav=document.querySelector(".nav");
var no=document.querySelector(".no");

men.addEventListener("click",function(){
    nav.classList.toggle("mostNav");
})

nav.addEventListener("click",function(i){
if(i.target != nav){
    nav.classList.toggle("mostNav")
}
})

