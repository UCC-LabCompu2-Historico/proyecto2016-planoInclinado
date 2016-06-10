/**
 * Created by Enzo on 10/06/2016.
 */
var peso = document.getElementById("input-peso-figura").value;
var angulo = document.getElementById("input-angulo").value;
var distancia = document.getElementById("input-distancia").value;
var tiempo = document.getElementById("input-tiempo").value;
var calculos = document.getElementById("select-calculos").value; 
var resultado = document.getElementById("resultado").value;
var coefricc = 0;


//ACELERACION= ((2 * document.getElementById("input-distancia").value) / Math.pow(document.getElementById("input-tiempo").value));


function calcular() {
    //Coeficiente de fricción entre la figura y el plano
    if(document.getElementById("select-calculos").value == 1)
    {
        document.getElementById("resultado").value = document.getElementById("input-peso-figura").value * 9.8 * Math.sin(document.getElementById("input-angulo").value);
    }

    //Fuerza de fricción que actua sobre la figura
    if (document.getElementById("select-calculos").value == 2) {
        
    }

    //Rapidéz del bloque despues de que se ha desplazado la distancia
    if(document.getElementById("select-calculos").value == 3)
    {
        alert("asdasd");
    }

}

