var aritmetica= {
    validarParamentros: function(nro1, nro2){
        var nro1= (typeof nro1=== 'number' && !isNaN(nro1));
        var nro2= (typeof nro2=== 'number' && !isNaN(nro2));
        return nro1 && nro2;
    },
    suma: function(nro1,nro2){
        if(this.validarParamentros(nro1,nro2)){
            console.log('El resultado de la suma es '+(nro1+nro2));
        }else{
            console.log('debe ingresar valores numéricos');
        }
    },
    resta: function(nro1,nro2){
        if(this.validarParamentros(nro1,nro2)){
            console.log('El resultado de la resta es '+(nro1-nro2));
        }else{
            console.log('debe ingresar valores numéricos');
        }
    },
    multiplicar: function(nro1,nro2){
        if(this.validarParamentros(nro1,nro2)){
            console.log('El resultado de la multiplicación es '+nro1*nro2);
        }else{
            console.log('debe ingresar valores numéricos');
        }
    },
    dividir: function(nro1,nro2){
        if(this.validarParamentros(nro1,nro2)){
            console.log('El resultado de la división es '+nro1/nro2);
        }else{
            console.log('debe ingresar valores numéricos');
        }
    },
    mostrarModulo: function(nro1,nro2){
        if(this.validarParamentros(nro1,nro2)){
            console.log('El resultado del residuo es '+nro1%nro2);
        }else{
            console.log('debe ingresar valores numéricos');
        }
    }
}
aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);

