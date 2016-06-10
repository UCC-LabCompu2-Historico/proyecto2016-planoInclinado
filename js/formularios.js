/**
 * Created by Enzo on 09/06/2016.
 */
/* En este archivo validamos los formularios (damos error si el usuario mete algo que no sea un numero, etc */



$(document).on("ready",function ()
{
    /* Tomo los valores que hay en cada input y los igualo a una variable */
    //.value significa que toma el valor

    $("#input-peso-figura").keyup(function () {

        var peso = document.getElementById("input-peso-figura").value; //.value significa que toma el valor
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
});


var resultado = 3;//resultado del calculo

    document.getElementById("input-resultado").value= resultado;