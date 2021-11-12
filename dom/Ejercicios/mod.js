

let number = prompt("Cuantos numeros quieres evaluar?");

var divisble = false;

for(var i = 1; i <= number; i++ )
{
    divisible=false;
    if(esDivisible(i,3))
    {
        document.write ("Fizz");
        divisible = true;
    }

    if(esDivisible(i,5))
    {
        document.write ("Buzz");
        divisible = true;
    }
    
    if(!esDivisible(i,3) && !esDivisible(i,5)) //Si no es divisible.... se podia if(i%3 !=0 && i % 5 ! =0)
    {
    document.write(i);
    }
    document.write("<br />");

}



function esDivisible(num, divisor)
{
    if(num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}