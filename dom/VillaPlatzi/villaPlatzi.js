var teclas= {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

document.addEventListener("keydown", detectarMovimiento);

var vp = document.getElementById("villa_platzi");
var papel =vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca={
    url: "vaca.png",
    cargaOK: false
};
var cantidadv= aleatorio(0, 10);


var pollo={
    url: "pollo.png",
    cargaOK: false
};
var cantidadp= aleatorio(0, 20);

var cerdo={
    url: "cerdo.png",
    cargaOK: false,
    x: 200,
    y: 200,
};



fondo.objeto =new Image();
fondo.objeto.src =  fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar()
}
function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar()
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar()
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar()
}


function dibujar()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.objeto , 0, 0);
    }
    if (vaca.cargaOK == true)
    {

        for(var v=0; v<cantidadv; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x*60;
            y =  y*60;
            papel.drawImage(vaca.objeto , x, y);
        }
        
    }
    if (pollo.cargaOK == true)
    {

        for(var p=0; p<cantidadp; p++)
        {
            var x = aleatorio(0, 10);
            var y = aleatorio(0, 10);
            x = x*40;
            y =  y*40;
            papel.drawImage(pollo.objeto , x, y);
        }
       
    }
    if (cerdo.cargaOK == true)
    {
        papel.drawImage(cerdo.objeto , cerdo.x, cerdo.y);
    }

}

function detectarMovimiento(evento)
{
    console.log("moverCerdo");
    var movimiento = 10;
    if (cerdo.cargaOK == true)
    {
        switch(evento.keyCode)
        {
            case teclas.DOWN:
                cerdo.y = cerdo.y + movimiento;
                console.log("abajo");
            break;
            case teclas.UP:
                cerdo.y = cerdo.y - movimiento;
                console.log("arriba");
            break;
            case teclas.LEFT:
                cerdo.x = cerdo.x - movimiento;
                 console.log("Pa la izquierda");
            break;
            case teclas.RIGHT:
                console.log("Pa la derecha");
                cerdo.x = cerdo.x + movimiento;
            break;
            default:
                console.log("Otra tecla");
            break;      
        }
    }
    dibujar();

}



function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * ( max - min -1)) + min;
    return resultado;
}