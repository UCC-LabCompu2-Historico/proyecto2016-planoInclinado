/**
 * Created by Enzo on 10/06/2016.
 */
var myCanvas = document.getElementById("canvas");
var context = myCanvas.getContext("2d");

context.beginPath();

context.moveTo(255,250);
context.lineTo(285,250);
context.lineTo(270,220);
context.lineTo(255,250);
context.closePath();

context.lineWidth=2;
context.fillStyle="black";
context.fill();
context.strokeStyle="black";
context.stroke();