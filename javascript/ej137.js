var numeros=[];
for(var i=0; i<=1000; i++){
    numeros.push(i);
    
}

numeros.forEach(function(nros,indice) {
    console.log(nros, indice);
});

var incrementoNumero= numeros.map(function(numero){
    return numero+10;
    
})
console.log(incrementoNumero);
