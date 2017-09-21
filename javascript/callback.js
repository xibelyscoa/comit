function saludar(nombre, callback){
    console.log('hola'+nombre);
    callback();
}
saludar('xibe',function(){
    console.log('chao'+nombre);
});
