
function reloj(){
    let tiempo=new Date();

    let hora=tiempo.getHours();
    let minuto=tiempo.getMinutes();
    let segundos=tiempo.getSeconds();
    let dia=tiempo.getDay();
    let mes=tiempo.getMonth();
    let año=tiempo.getFullYear();
    let fecha=tiempo.getDate()

    let hoy=["Domingo","Lunes","Martes","Miercoles","Jueves","viernes","Sabado"];
    let esteDia=hoy[dia];

    let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre",
               "Noviembre","Diciembre"];
    let esteMes=meses[mes];

    am=(hora>12?"PM":"AM")
    hora=(hora>12?hora-12:hora);
    minuto=(minuto<10?"0"+minuto:minuto);
    segundos=(segundos<10?"0"+segundos:segundos);
    fecha=(fecha<10?"0"+fecha:fecha)


    document.querySelector(".pantalla_hora").innerHTML=hora+":"+minuto;
    document.querySelector(".pantalla_dia").innerHTML=esteDia;
    document.querySelector(".pantalla_mes").innerHTML=esteMes;
    document.querySelector(".pantalla_año").innerHTML=año;
    document.querySelector(".fecha").innerHTML=fecha;
    document.querySelector(".pantalla_AMPM").innerHTML=am;
    document.querySelector(".pantalla_segundos").innerHTML=segundos;
};

// reloj();
setInterval(reloj, 1000)


