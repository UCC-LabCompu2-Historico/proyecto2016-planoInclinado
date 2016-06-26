var canvas=document.getElementById("miCanvas");
var context=canvas.getContext("2d");

function canvass() {

    //TRIANGULO
//Radio vector
    context.moveTo(0,0);
    context.lineTo(300,300);
    context.stroke();
//Cateto opuesto
    context.moveTo(0,0);
    context.lineTo(0,300);
    context.stroke();
//Cateto adyacente
    context.moveTo(0,300);
    context.lineTo(300,300);
    context.stroke();

//FIGURA
//Lado izquierdo
    context.moveTo(100,100);
    context.lineTo(150,50);
    context.stroke();
//Lado derecho
    context.moveTo(150,150);
    context.lineTo(200,100);
    context.stroke();
//Lado arriba
    context.moveTo(150,50);
    context.lineTo(200,100);
    context.stroke();
//FLECHA
//Largo
    context.moveTo(175,125);
    context.lineTo(250,200);
    context.stroke();
//Extremos
    context.moveTo(250,200);
    context.lineTo(225,150);
    context.stroke();

    context.moveTo(250,200);
    context.lineTo(200,175);
    context.stroke();


}

