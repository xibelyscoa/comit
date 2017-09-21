var mutantes= ['Prof. Charles Francis Xavier','Scott Summers','Dr. Henry Philip "Hank" McCoy','Jean Elaine Grey','James "Logan" Howlett','Calvin Montgomery Rankin','Kevin Sydney'];
var mut_1='';
var mut_2='';
mutantes.forEach(function(mutante){
    if (mutante=='Jean Elaine Grey'){
        mut_1= mutante;
    }
    if (mutante=='James "Logan" Howlett'){
        mut_2=mutante; 
    }
    
})
console.log(mut_1,'/',mut_2);