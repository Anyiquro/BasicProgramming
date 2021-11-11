var vp = document.getElementById("villa_platzi");
var papel =vp.getContext("2d");
var mapa = "tile.png";

var fondo =new Image();
fondo.src =  mapa;
fondo.addEventListener("load", dibujar);

function dibujar()
{
    papel.drawImage(fondo, 0, 0);
}



function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * ( max - min -1)) + min;
    return resultado;
}