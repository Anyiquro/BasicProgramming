var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito"); //para traer el id
var ancho = d.width;
var lienzo = d.getContext("2d"); //metodo del canva


function dibujarLinea(color, xin, yin, xfin, yfin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color; //esto era un atributo por eso se usa el =
    lienzo.moveTo(xin, yin); // se va poneindo el lapiz en el rpiemr punto
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke(); //para que se dibuje del color de eleccion
    lienzo.closePath(); //termina de dibujar
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l= 0;
    var colorcito = "Black"
    var yi, xf, xi, yf,yini, xini,yfinal, xfinal;
    var espacio = ancho/lineas;


while(l < lineas)
{
    yi= espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("red", 0, yi, xf, 300); 
    xi= 300 - (espacio * l);
    yf = espacio * (l + 1);
    dibujarLinea("pink", xi, 0, 0, yf);
    xini= espacio * (l +1);
    yfinal = (300-espacio) - (espacio * l);
    dibujarLinea("yellow", xini, 300, 300, yfinal);
    yini= 300 - (espacio * l);
    xfinal = (300-espacio) - (espacio * l);
    dibujarLinea("orange", 300, yini, xfinal, 0); 
 
    
    console.log("Linea "+l);
    
    l = l + 1;
}

dibujarLinea(colorcito, 1 ,1 , 1, 299);
dibujarLinea(colorcito, 1 ,299 , 299, 299);
dibujarLinea(colorcito, 1 , 1 , 299, 1);
dibujarLinea(colorcito, 299 ,1 , 299, 299);
}