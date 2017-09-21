function helados(gustosHelados,nuevosGustos){
    var listaHelados= gustosHelados.unshift(nuevosGustos);
    var primero= gustosHelados.shift();
    var segundo= gustosHelados.shift();
    var heladosStock=[primero,segundo];
    console.log(gustosHelados,heladosStock);
}
var misHelados=['Chocolate','Vainilla','coco','uva'];
misHelados= misHelados.reverse();
helados(misHelados,'mora');