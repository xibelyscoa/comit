function autenticarUsuario(nombreDeUsuario, clave){
    var usuario= {
        username: 'batman',
        password: 'Alfred1960KPO'
    };
    
    if (nombreDeUsuario==='batman' && clave==='Alfred1960KPO'){
        console.log(usuario)
        return true;
    }else{
        console.log('Usuario no autenticado');
        return true;
    }
}
autenticarUsuario('batman','Alfred1960KPO');