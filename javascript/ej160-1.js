var propiedades= ['nombre', 'precio','localidad'];
var juegos= {
    juego1: {
        nombre:'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        localidad: 'Capital Federal'
    },
    juego2: {
        nombre:'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        localidad: 'Capital Federal'
    },
    juego3: {
        nombre:'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        localidad: 'Capital Federal'
    }
    
}
for(var i= 1 ; i<4 ; i++){
    propiedades.forEach(function(propiedad){
        console.log(propiedad,juegos['juego'+i][propiedad]);
    });
}