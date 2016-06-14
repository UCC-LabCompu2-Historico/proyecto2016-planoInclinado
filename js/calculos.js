function calcular() {
    //Calculo de coeficiente de fricción entre la figura y el plano
    if(document.getElementById("select-calculos").value == 1) {
        var resultado=document.getElementById("resultado").value;
        var angulovalor=document.getElementById("input-angulo").value;
        var radianes=angulovalor*Math.PI/180;
        document.getElementById("resultado").value=document.getElementById("input-peso-figura").value * 9.8 * Math.sin(radianes) + " Newton";
    }

    //Calculo de fuerza de fricción que actúa sobre la figura
    if (document.getElementById("select-calculos").value == 2) {

        var anguloxd2=document.getElementById("input-angulo").value;
        var radianes2=anguloxd2*Math.PI/180;
        var N=document.getElementById("input-peso-figura").value*9.8*Math.cos(radianes2);
        var coefriccion=document.getElementById("input-peso-figura").value * 9.8 * Math.sin(radianes2);
        var aceleracion=(2*document.getElementById("input-distancia").value) / (document.getElementById("input-tiempo").value*document.getElementById("input-tiempo").value);

        document.getElementById("resultado").value=(coefriccion - (document.getElementById("input-peso-figura").value * aceleracion)) / N +" Newton";
    }

    //Calculo de rapidéz del bloque despues de que se ha desplazado la distancia ingresada
    if(document.getElementById("select-calculos").value == 3)
    {
        var aceleracion2=(2*document.getElementById("input-distancia").value) / (document.getElementById("input-tiempo").value*document.getElementById("input-tiempo").value);

        document.getElementById("resultado").value= aceleracion2*document.getElementById("input-tiempo").value + " m/s";
    }

}





