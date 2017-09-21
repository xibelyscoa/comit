var linea,num,linea,asteriscos,copia;
num=12;
while(num>=0){
    linea=0
    asterisco='';
    copia=num+1;
    while(linea<=num){
        asterisco += '*';
        linea+=1;
    }
    console.log(copia+asterisco);
    num-=2;
}