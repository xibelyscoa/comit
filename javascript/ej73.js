var linea,num,linea,asteriscos;
num=13;
while(num>=0){
    linea=0
    asterisco='';
    while(linea<=num){
        asterisco += '*';
        linea+=1;
    }
    console.log(asterisco);
    num--;
}