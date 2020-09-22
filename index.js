
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

var dere=document.querySelector(".cabeza");
var lec=document.querySelector(".lectura1");
var lec2=document.querySelector(".lectura2");
var lec3=document.querySelector(".lectura3");

lec.addEventListener("click",function(){
    lec.classList.toggle("arre");
    lec2.classList.toggle("quite");
    lec3.classList.toggle("quite")
    dere.classList.toggle("quite")
})

/*RELOJ*/
/*var reloj1=function(){
    var datos=new Date();
    var hora=datos.getHours();
    var minutos=datos.getMinutes();
    var segundos=datos.getSeconds();
    var dia=datos.getDay();
    var mes=datos.getMonth();
    var año=datos.getFullYear();
    var fecha=datos.getDate();
    var ampm;
    

    var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","JUlio","Agosto","Septiembre",
    "Octubre","Noviembre","Diciembre"];
    var esteMes=meses[mes];

    diaSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    var hoy=diaSemana[dia]

    ampm=(hora>12)?"PM":"AM";
   hora=(hora>12)? hora-12 :hora;
   segundos=(segundos<10)?"0"+segundos:segundos;

    document.getElementById("hora").innerHTML=hoy +" "+fecha+"  "+esteMes+" "+año+
    " --------- "+hora+":"+
    minutos +" "+" : "+ segundos+" "+ampm
    ampm;
}
reloj1()
setInterval(reloj1,1000)


var cajah=document.querySelector(".cajareloj");


cajah.addEventListener("click",function(){
    cajah.classList.toggle("re");
})*/

/*reloj 2*/
var reloj=function(){
    var ver=new Date();
    var fecha=ver.getDate();
    var dia=ver.getDay();
    var mes=ver.getMonth();
    var año=ver.getFullYear();
    var hora2=ver.getHours();
    var minutos=ver.getMinutes();
    var sugundos=ver.getSeconds();
    var ampm;
  
    var dias=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
    var diaHoy=dias[dia];
  
    var meses=["En","Feb","Marz","Abr","May","Jun","Jul","Agos","Sept",
               "Oct","Nov","Dic"];
    var mesAc=meses[mes]
  
    hora2=(hora2>12)? hora2 -12:hora2;
  
   sugundos=(sugundos<10)?"0"+sugundos:sugundos;
   minutos=(minutos<10)?"0"+minutos:minutos;
  
   ampm=(hora2<12)? "PM":"AM";
  
    document.getElementById("hora2").innerHTML=hora2+":"+minutos;
    document.getElementById("segundo").innerHTML=sugundos;
    document.getElementById("ampm").innerHTML=ampm
    document.getElementById("fecha").innerHTML=diaHoy+" /"+fecha+" /"+mesAc+" /"+año;
  
  }
  reloj()
  setInterval(reloj,1000);
  
  var log=document.querySelector(".logoHora");
  var re=document.querySelector(".principal");
  var ce=document.querySelector(".cerraR");
  var caj=document.querySelectorAll(".cajaDelReloj")
  
  log.addEventListener("click",function(){
    re.classList.toggle("quitaReloj");
  })
  
  re.addEventListener("click",function(h){
  if(h.target !=caj){
    re.classList.toggle("quitaReloj")
  }
  })
