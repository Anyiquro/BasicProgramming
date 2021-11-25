

class Billete
{
    constructor(v, c)
    {
        this.valor= v;
        this.cantidad = c;

    }
}

function entregarDinero()
{
    entregado = [];
    var t=document.getElementById("dinero");
    dinero = parseInt(t.value);

    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles =bi.cantidad;
            }
            else 
            {
                papeles=div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            bi.cantidad = bi.cantidad - papeles;
            dinero = dinero - (bi.valor*papeles);
        }
    }

    if(dinero > 0)
    {

        resultado.innerHTML="No hay fondos suficientes";
        
    }
    else
    {
        for ( var entre of entregado)
        {
            if(entre.cantidad >0)
            {
                resultado.innerHTML= resultado.innerHTML + entre.cantidad + " billetes de $ " + entre.valor + "<br> ";
            }
        } 
        resultado.innerHTML= resultado.innerHTML + "La cantidad de dinero que queda en el cajero es: "+ obtenerRestante() +"<br>";

    }
}

function obtenerRestante()
{
    var restante = 0;

    for(var bille of caja)
    {
        restante = restante + bille.valor * bille.cantidad;
    }

    return restante;
}



var caja = [];
var entregado =[];

caja.push(new Billete(50, 3));
caja.push(new Billete(20, 3));
caja.push(new Billete(10, 2));

var dinero =0;
var div = 0;
var papeles = 0;

var resultado =document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);