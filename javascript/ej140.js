var mutantes= 
['Prof. Charles Francis Xavier',
'Scott Summers',
'Dr. Henry Philip "Hank" McCoy',
'Jean Elaine Grey',
'James "Logan" Howlett',
'Calvin Montgomery Rankin',
'Kevin Sydney'];

var mutantesModificadas= mutantes.filter(function(misMutantes){
    return misMutantes.length !== 13;
});
console.log(mutantesModificadas);

mutantes.forEach(function(mutante, indice){
    console.log(mutante,indice);    
});
