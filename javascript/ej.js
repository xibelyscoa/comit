mprimirEnPantalla: function(precio){
    var propiedades=['nombre','precio','cantidadVendida','localidad'];
    var precios=[1060,1060,1449,1190,1250,890,950,940,790,1000,1290,1390,1390];
    precios= precios.sort();
    switch (precio){
        case 'asc':
            for(var i= 1 ; i<14 ; i++){
                var ella= this;
                    if ((ella['juego'+i]['precio'])<precios[i]){
                        console.log('');
                        precios.forEach(function(pe){
                            propiedades.forEach(function(propiedad){
                                console.log(propiedad,ella['juego'+i][propiedad]);
                            });    
                        }); 
                    }
            }
            break;
        case 'desc':
            for(var i= 1 ; i<14 ; i++){
                var ella= this;
                precios= precios.reverse();
                if ((ella['juego'+i]['precio'])<precios[i]){
                    console.log('');
                    propiedades.forEach(function(propiedad){
                       console.log(propiedad,ella['juego'+i][propiedad]);
                    });
                }
            }              
            break;
        default:
            for(var i= 1 ; i<14 ; i++){
                var ella= this;
                precios= precios.sort();
                if ((ella['juego'+i]['precio'])<precios[i]){
                    console.log('');
                    propiedades.forEach(function(propiedad){
                        console.log(propiedad,ella['juego'+i][propiedad]);
                    });
                }
            }
            break;
    }
    
}