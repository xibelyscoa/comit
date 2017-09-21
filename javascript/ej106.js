function obtenerIDUsuario(){
    return 50;
}
function  usuarioValido(){
    return true;
}

if (obtenerIDUsuario()>30) {
    console.log('Usuario falso');
}else{
    console.log('Usuario valido');
}

if (usuarioValido()){
    console.log('EL usuario es válido');
}else{
    console.log('EL usuario no es válido');
}