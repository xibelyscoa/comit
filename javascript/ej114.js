function invertir(texto){
    var frase= texto.length;
    var textoInvertido= '';
    while(frase>=0){
        textoInvertido =  textoInvertido + texto.charAt(frase);
        frase -= 1;
    }
    console.log(textoInvertido);
}
invertir('Xibelys');