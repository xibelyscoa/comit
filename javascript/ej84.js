var linea,num,linea,asteriscos,cant;
num=12;
do
{
    linea=0
    asterisco='';
    cant=num+1;
    do
    {
        asterisco += '*';
        linea+=1;
    }   while(linea<=num)
    console.log(cant+asterisco);
    num-=2;
}   while(num>=0);