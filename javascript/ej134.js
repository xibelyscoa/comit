var nro= [];
var suma=0;
for (var i=0 ; i<=10000; i++){
   nro.push(i);
}

for (var j=0; j<nro.length; j++){
  suma= suma+nro[j];
   console.log(suma);
}
console.log('El total de la suma parcial es ',suma);

if (total=50005000){
    console.log('El ejercicio es correcto');
    
}else{
    console.log('Verificar el ejercicio para obtener el resultado esperado!!!');
}
