function arreglos(ordenado){
    console.log(ordenado);
    ordenado.sort();
    console.log(ordenado);
    ordenado.reverse();
    console.log(ordenado);
    var asterisco= ordenado.join('*');
    console.log(asterisco);
}
var mutantes= [
    'Prof. Charles Francis Xavier',
    'Scott Summers',
    'Dr. Henry Philip "Hank" McCoy',
    'Jean Elaine Grey',
    'Calvin Montgomery Rankin',
    'Kevin Sydney',
    'Lorna Sally Dane',
    'Alexander Summers',
    'Suzanne Chan',
    'James "Logan" Howlett',
    'Ororo Monroe' 
]
arreglos(mutantes)
