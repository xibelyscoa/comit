var nro1, nro2, res;
nro1= -1;
nro2= 1
res= 0;
do
{
    res= nro1+nro2;
    nro1= nro2;
    nro2=res;
    console.log(res);
}   while (res<=10);
