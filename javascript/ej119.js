var datos= [42, true, function() {console.log('El significado de la vida es: ')}];
var indice2= datos[2];
var indice0= datos[0];
if (datos[2]){
    console.log(indice2()+indice0);
}else{
    console.log(datos[2]);
}