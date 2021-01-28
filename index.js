
// **************************fecha*****************************//

function fecha(){
    let fechas= new Date();
    hora=fechas.getHours();
    min=fechas.getMinutes();
    seg=fechas.getSeconds()

    dia=fechas.getDay()
    fecha_dia=fechas.getDate()
    mes=fechas.getMonth()
    ano=fechas.getFullYear()

    dia_actual=["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];
    dias=dia_actual[dia]

    mes_actual=["Ene","Feb","Mar","Abr","May","Jun","Jul","Agost","Set",
                "Oct","Nov","Dic"]
    meses=mes_actual[mes]

    hora=(hora>12? hora -12 : hora);
    hora=(hora<1? "0"+hora : hora);
    seg=(seg<10? "0"+seg : seg)
    min=(min<10? "0"+min : min)
 
   
    document.querySelector(".fecha").innerHTML=`<b>${hora}:${min} ${seg}&nbsp <> &nbsp${dias}
    ${fecha_dia} ${meses} ${ano} </b>`
}
setInterval(fecha, 1000);

/******************************CONTADOR**************************/
var ing=0;
var sal=0;
var bot_sal=document.getElementById("act")
var b=document.querySelector(".bot_ent");

 document.querySelector(".bot_ent").addEventListener("click",sumar)
document.querySelector(".bot_sal").addEventListener("click",restar)


function sumar(){
    ing++;
    document.querySelector("#sumar").innerHTML=ing
}
function restar(){
    sal++;
    document.querySelector("#restar").innerHTML=sal
}

function validar(){
var tot=ing-sal;


    document.getElementById("act").innerHTML=tot;
    if(tot>=1){
        document.querySelector(".bot_sal").classList.add("mosBot")
    }else{
        document.querySelector(".bot_sal").classList.remove("mosBot")

    }
}
document.querySelector(".bot_sal").addEventListener("click",validar)
document.querySelector(".bot_ent").addEventListener("click",validar)



var Cont=document.querySelectorAll(".software")
var cerr=document.querySelector(".cerrar");

Cont.forEach(function(g){
g.addEventListener("click",function(){
    document.querySelector(".caja_contador").classList.toggle("mosCont")
})
})


cerr.addEventListener("click",function(n){
if(n.target==cerr){
    document.querySelector(".caja_contador").classList.toggle("mosCont")

}
})
/*************************NAVEGACION ***************************/ 
var h=document.querySelector(".hamburg")

h.addEventListener("click",function(){
document.querySelector(".cinta1").classList.toggle("ver_cinta");
h.classList.toggle("mover_hamburg")
})

document.querySelector(".cinta1").addEventListener("click",function(gh){
if(gh.target!=document.querySelector(".cinta1")){
    document.querySelector(".cinta1").classList.toggle("ver_cinta");
    h.classList.toggle("mover_hamburg")

}
})

// *****************************************AZÁR***************************
var suerte=document.querySelector(".suerte");
var azar=document.querySelector(".caja_azar");

suerte.addEventListener("click",function(n){
    azar.classList.toggle("ver_caja_azar")

})
document.querySelector(".cerrar_azar").addEventListener("click",function(){
    document.querySelector(".caja_azar").classList.toggle("ver_caja_azar")
})

// *********************************ANIMACIONES**********************************

window.addEventListener("scroll",function(){
mi_menu()
})

let posiTop=window.pageYOffset;
function mi_menu(){
    let posiAct=window.pageYOffset;
    if(posiTop>posiAct){
        document.querySelector(".navegacion").style.top="0"
    }else{
        document.querySelector(".navegacion").style.top="-200px"

    }
    posiTop=posiAct;
}

// *************************SLIDER*********************************

let canvas=document.querySelector(".canvas");
let inp_slider=document.querySelector(".input_slider");

inp_slider.addEventListener("input",mos_slider);
let contexto=canvas.getContext("2d");
let mem_img=[];

for(let i=1;i<=21;i++){
    let contador=i;
    let url_img=`canvas/pena_000${contador}.jpg`;
    let nueva_img=new Image();
    nueva_img.src=url_img;

    nueva_img.addEventListener("load",function(){
        mem_img[i]=nueva_img;
        if(i==1){
            dibujar(i)
        }
    })
}
function dibujar(img){
    contexto.drawImage(mem_img[img],0,0,canvas.width,canvas.height)
}
function mos_slider(){
    dibujar(this.value)
}
