function elMasGrande(nombre){
    if(nombre==='roman'){
        var cadena = ('El mejor de la historia es Román');
        cadena = cadena.toUpperCase();
        console.log(cadena);
    }else{
        console.log('Por favor ingrese el nombre de un gran jugador');
    }
}
elMasGrande('roman');