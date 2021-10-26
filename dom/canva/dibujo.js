var d = document.getElementById("dibujito"); //para traer el id
var lienzo = d.getContext("2d"); //metodo del canva
var lineas = 30;
var l= 0;
var colorcito = "Black"
var yi, xf, xi, yf,yini, xini,yfinal, xfinal;


while(l < lineas)
{
    yi= 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("red", 0, yi, xf, 300);
    xi= 300 - (10 * l);
    yf = 10 * (l + 1);
    dibujarLinea("pink", xi, 0, 0, yf);
    yini= 300 - (10 * l);
    xfinal = 290 - (10 * l);
    dibujarLinea("orange", 300, yini, xfinal, 0); 
    xini= 10 * (l +1);
    yfinal = 290 - (10 * l);
    dibujarLinea("yellow", xini, 300, 300, yfinal);
    
    
    console.log("Linea "+l);
    
    l = l + 1;
}



dibujarLinea(colorcito, 1 ,1 , 1, 299);
dibujarLinea(colorcito, 1 ,299 , 299, 299);
dibujarLinea(colorcito, 1 , 1 , 299, 1);
dibujarLinea(colorcito, 299 ,1 , 299, 299);

function dibujarLinea(color, xin, yin, xfin, yfin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color; //esto era un atributo por eso se usa el =
    lienzo.moveTo(xin, yin); // se va poneindo el lapiz en el rpiemr punto
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke(); //para que se dibuje del color de eleccion
    lienzo.closePath(); //termina de dibujar
}