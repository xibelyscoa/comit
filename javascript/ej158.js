var juegos= {
    juego1: {
             nombre:'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
             precio: 1060,
             cantidadVendida: 276,
             localidad: 'Capital Federal'
     },
     juego2: {
             nombre:'Lego Marvel Super Heroes',
             precio:700,
             cantidadVendida: 48,
             localidad:'Capital Federal'
     },
    juego3: {
             nombre:'Gta V Ps4 Físico',
             precio: 1449,
             cantidadVendida: 82,
             localidad:'Santa Fe'
     },
     juego4: {
             nombre:'Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo',
             precio: 1190,
             cantidadVendida:348,
             localidad:'Capital Federal'
     },
     juego5: {
             nombre:'Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado',
             precio:1250,
             cantidadVendida: 445,
             localidad:'Buenos Aires'
     },
     juego6: {
             nombre:'Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!',
             precio: 890,
             cantidadVendida:182,
             localidad:'Capital Federal'
     },
     juego7: {
             nombre:'Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4',
             precio:950,
             cantidadVendida: 517,
             localidad:'Capital Federal'
     },
     juego8: {
             nombre:'Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!',
             precio:940,
             cantidadVendida:275,
             localidad:'Capital Federal'
     },
     juego9: {
             nombre:'Need For Speed Ps4 Físico Nuevo Sellado Playstation Alclick',
             precio:790,
             cantidadVendida: 89,
             localidad:'Capital Federal'
     },
     juego10: {
             nombre:'Lego Batman',
             precio: 1000,
             cantidadVendida: 39,
             localidad:'Capital Federal'
     },
     juego11: {
             nombre:'Fifa 17 Ps4 Original Fisico 2017',
             precio:1290,
             cantidadVendida: 310,
             localidad:'Capital Federal'
     },
     juego12: {
             nombre:'Resident Evil 7 Ps4 Biohazard Físico',
             precio:1390,
             cantitadVendida: 154,
             localidad:'Capital Federal'
     },
     juego13: {
             nombre:'Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick',
             precio:1390,
             cantidadVendida: 241,
             localidad:'Capital Federal'
     },
     imprimirEnPantalla: function(orden){
        var propiedades=['nombre','precio','cantidadVendida','localidad'];
        var ella= this;
        var arreglo=[];
        for(var i= 1 ; i<14 ; i++){ 
                console.log('');
                propiedades.forEach(function (propiedad) {
                        arreglo[i-1]=ella['juego'+i];
                        //console.log(arreglo);
                });
        }
        switch (orden){
                case 'asc':
                        arreglo.sort(function (a, b) {
                                if (a.precio > b.precio) {
                                        return 1;
                                }
                                if (a.precio< b.precio) {
                                        return -1;
                                }
                                return 0;
                        });
                        break;   
                case 'desc':
                        arreglo.sort(function (a, b) {
                                if (a.precio > b.precio) {
                                        return -1;
                                  }
                                  if (a.precio< b.precio) {
                                        return 1;
                                  }
                                  return 0;
                              });
                        break;
                default:
                        arreglo.sort(function (a, b) {
                                if (a.precio > b.precio) {
                                        return 1;
                                }
                                if (a.precio< b.precio) {
                                        return -1;
                                }
                        return 0;
                        });
                        break;
        }
        for(var i= 0 ; i<13 ; i++){ 
                console.log('');
                propiedades.forEach(function (propiedad) {
                     console.log(propiedad, arreglo[i][propiedad]);
                });
        }
                        
                            
    }
}
juegos.imprimirEnPantalla('asc');

