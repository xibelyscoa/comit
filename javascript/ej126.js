function helados(gustosHelados,nuevosGustos){
    var listaHelados= gustosHelados.unshift(nuevosGustos);
    console.log(gustosHelados);
}
var misHelados=['Chocolate','Vainilla','coco','uva'];
misHelados= misHelados.reverse();
helados(misHelados,'mora');