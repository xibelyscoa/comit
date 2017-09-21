function autenticarUsuario(usuario){
    if (usuario.username==='batman' && usuario.password==='Alfred1960KPO'){
        console.log(usuario)
        return true;
    }else{
        console.log('Usuario no autenticado');
        return true;
    }
}
var usuario= {
    username: 'batman',
    password: 'Alfred1960KPO'
};
autenticarUsuario(usuario);