function obtenerPerimetroRectangulo(base,altura){
    if(!isNaN(base) && !isNaN(altura)){
        var perimetro= base*altura;
        if(base===altura){
            console.log('El perimetro del cuadrado es '+perimetro);
        }else{
            console.log('El perimetro del rectangulo es '+perimetro);
        } 
        if(perimetro>100){
            console.log('El perímetro es muy grande');
        }else{
            console.log('Este perímetro no es muy grande');   
        }
    }
}
obtenerPerimetroRectangulo(9,9)
