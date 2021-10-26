var d = document.getElementById("dibujito"); //para traer el id
var lienzo = d.getContext("2d"); //metodo del canva

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("blue", 300, 10, 10, 220);

function dibujarLinea(color, xin, yin, xfin, yfin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color; //esto era un atributo por eso se usa el =
    lienzo.moveTo(xin, yin); // se va poneindo el lapiz en el rpiemr punto
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke(); //para que se dibuje del color de eleccion
    lienzo.closePath(); //termina de dibujar
}