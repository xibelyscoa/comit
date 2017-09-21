var linea,num,linea,asteriscos;
num=13;
do
{
    linea=0
    asterisco='';
    do
    {
        asterisco += '*';
        linea+=1;
    }while(linea<=num);
    console.log(asterisco);
    num--;
}   while(num>=0);