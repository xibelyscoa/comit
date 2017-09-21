var presupuesto= [1200,2000, 3200,2400,4100];

var presupuestoFinal= presupuesto.reduce(function(suma, gastos){
    return suma+ gastos;
});
console.log(presupuestoFinal);