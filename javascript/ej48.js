var mensaje= '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
var piCadena= mensaje.slice(0,4);
pi= parseFloat(piCadena);
var significadoDeLaVidaCadena= mensaje.slice(38,40);
var significadoDeLaVida= parseFloat(significadoDeLaVidaCadena);
var resultado= pi+significadoDeLaVida;
console.log(resultado+ ' Es el resultado de sumar las variables pi y significadoDeLaVida');