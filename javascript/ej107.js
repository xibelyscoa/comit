function numeroMasGrande(numero1, numero2) {
    if(!isNaN(numero1) && !isNaN(numero2)){
        if (numero1 > numero2) {
            console.log('El ' + numero1 + ' es mas grande que el ' + numero2);
        } else if (numero2 > numero1) {
            console.log('el ' + numero2 + ' es mas grande que ' + numero1);
        } else {
            console.log('el ' + numero1 + ' es igual que ' + numero2);
        }
    } else {
       console.log('Debe ingresar un dato numérico para ejecutar la función');
    }


}
numeroMasGrande('v','f');