var nros= [];
for(var i=0 ; i<=1000 ; i++){
    nros.push(i);
}
var pares= nros.filter(function(par){
    return par % 2 === 0;
});

var ultimosPares= pares.filter(function(ultimosPar){
    return ultimosPar > 980;
});
console.log(ultimosPares);
var impares= nros.filter(function(impar){
    return impar % 2 !== 0;
});
var ultimosImpares= impares.filter(function(ultimosImpar){
    return ultimosImpar > 980;
});
console.log(ultimosImpares);