/**
 * Created by Enzo on 09/06/2016.
 */

//En este archivo validamos los formularios (damos error si el usuario ingresa algo que no sea un numero. (isNaN)

$(document).on("ready",function ()
{
    //NOTA: .value significa que toma el valor

    $("#input-peso-figura").keyup(function () {

        var peso = document.getElementById("input-peso-figura").value; 
       if(isNaN(peso))
       {
           $("#input-peso-figura").addClass("red");
       }
        else
       {
           $("#input-peso-figura").removeClass("red");
       }
    });


    $("#input-angulo").keyup(function (){

        var angulo = document.getElementById("input-angulo").value;
        if(isNaN(angulo))
        {
            $("#input-angulo").addClass("red");
        }
        else
        {
            $("#input-angulo").removeClass("red");
        }
    });

    $("#input-distancia").keyup(function () {
        var distancia = document.getElementById("input-distancia").value;
        if(isNaN(distancia))
        {
            $("#input-distancia").addClass("red");
        }
        else
        {
            $("#input-distancia").removeClass("red");
        }
    });

    $("#input-tiempo").keyup(function () {
        var tiempo = document.getElementById("input-tiempo").value;
        if(isNaN(tiempo))
        {
            $("#input-tiempo").addClass("red");
        }
        else
        {
         $("#input-tiempo").removeClass("red");
        }
    });

    $("#input-pesoconversion").keyup(function () {
        var pesoconversion = document.getElementById("input-pesoconversion").value;
        if(isNaN(pesoconversion))
        {
            $("#input-pesoconversion").addClass("red");
        }
        else
        {
            $("#input-pesoconversion").removeClass("red");
        }
    });

    $("#input-distanciaconversion").keyup(function () {
        var distanciaconversion = document.getElementById("input-distanciaconversion").value;
        if(isNaN(distanciaconversion))
        {
            $("#input-distanciaconversion").addClass("red");
        }
        else
        {
            $("#input-distanciaconversion").removeClass("red");
        }
    });

    $("#input-tiempoconversion").keyup(function () {
        var tiempoconversion = document.getElementById("input-tiempoconversion").value;
        if(isNaN(tiempoconversion))
        {
            $("#input-tiempoconversion").addClass("red");
        }
        else
        {
            $("#input-tiempoconversion").removeClass("red");
        }
    });
});