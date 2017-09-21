function mostrarNumeros(inicio, fin){
    if(!isNaN(inicio) && !isNaN(fin)){
        if (inicio<fin){
            while (inicio<=fin){
                console.log(inicio);
                inicio+= 1;
            }
        }else if (inicio>fin){
                while (inicio>=fin){
                    console.log(inicio);
                    inicio-= 1;
                }
                }else{
                    console.log(inicio, fin);
                }
    }else{
        console.log('Debe ingresar datos numérico para ejecutar la función');
    }
    
}
mostrarNumeros(0,100);