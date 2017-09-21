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
    var cont=0;
    while (cont<10){
        if (mutantes.indexOf('Lorna Sally Dane') > -1) {
            break;
        }else{
            console.log(mutantes[cont])
        }
       cont+= 1;
    }
console.log(mutantes.toString());