var fibonacci= function() {
    var n1, n2, resul;
    n1= -1;
    n2= 1;
    resul= 0;
    while(resul<10){
        resul= n1+n2;
        n1= n2;
        n2=resul;
        console.log(resul);
    }
}
fibonacci();