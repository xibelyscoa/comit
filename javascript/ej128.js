function helados(gustosHelados,nuevosGustos){
    var listaHelados= gustosHelados.unshift(nuevosGustos);
    var ultimo= gustosHelados.pop();
    var penultimo= gustosHelados.pop();
    var heladosStock=[ultimo,penultimo];
    console.log(gustosHelados,heladosStock);
}
var misHelados=['Chocolate','Vainilla','coco','uva'];
misHelados= misHelados.reverse();
helados(misHelados,'mora');