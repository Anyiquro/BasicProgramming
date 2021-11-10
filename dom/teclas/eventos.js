var teclas= {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}


document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xin, yin, xfin, yfin, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color; //esto era un atributo por eso se usa el =
    lienzo.lineWidth = 3;
    lienzo.moveTo(xin, yin); // se va poneindo el lapiz en el rpiemr punto
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke(); //para que se dibuje del color de elección
    lienzo.closePath(); //termina de dibujar
}

function dibujarTeclado(evento)
{
    var colorcito = "pink";
    var movimiento = 4;
   switch(evento.keyCode)
   {
       case teclas.DOWN:
           dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
           y = y + movimiento;
        console.log("abajo");
       break;
       case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        console.log("arriba");
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y , papel);
            x = x- movimiento;
        console.log("Pa la izquierda");
        break;
        case teclas.RIGHT:
        console.log("Pa la derecha");
        dibujarLinea(colorcito, x, y, x + movimiento, y , papel);
        x = x + movimiento;
        break;
        default:
            console.log("Otra tecla");
            break;      
   }
}

