var nro1, nro2;
nro1= -1;
nro2= 1

for (var res= 0; res<=10;){
    res= nro1+nro2;
    nro1= nro2;
    nro2=res;
    console.log(res);
}   
