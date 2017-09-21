function coleccionModificada(arreglo){
    var filtrados= arreglo.filter(function(mutante){
        return mutante.length >15
               
    });
    var borrar= filtrados.pop();
    var unir= filtrados.join(' <3 ');
    console.log(unir);
}
var mutantes= ['Prof. Charles Francis Xavier','Scott Summers','Dr. Henry Philip "Hank" McCoy','Jean Elaine Grey','James "Logan" Howlett','Calvin Montgomery Rankin','Kevin Sydney'];
coleccionModificada(mutantes);

