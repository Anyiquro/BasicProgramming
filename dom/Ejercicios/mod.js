var numero=100;

var divisble = false;

for(var i = 1; i <= 100; i++ )
{
    divisible=false;
    if(i % 3 == 0)
    {
        document.write ("Fizz");
        divisible = true;
    }

    if(i % 5 == 0)
    {
        document.write ("Buzz");
        divisible = true;
    }
    
    if(!divisible) //Si no es divisible.... se podia if(i%3 !=0 && i % 5 ! =0)
    {
    document.write(i);
    }
    document.write("<br />");

}