var asteriscos, cant;
for(var num=12; num>=0; num-=2){
    asterisco='';
    cant=num+1;
    for(var linea=0; linea<=num; linea+=1){
        asterisco += '*';
    }
        console.log(cant+asterisco);
}
