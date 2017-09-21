var usuario= {
    username: null,
    password: null,
    saludar: function(){
        if(this.username!==null){
        console.log('Hola, soy el usuario '+this.username);
        }else{
            console.log('Este usuario no tiene username');
        }
    },
    ingresar: function(){
        if(this.password!==null){
        console.log('Bienvenido al sistema '+this.password);
        }else{
            console.log('su password es incorrecto');
        }
    },
    updatePassword: function(clave){
        this.password=clave;
    },
    updaterUsername: function(nombre){
        this.username=nombre;
    },
}
usuario.saludar();
usuario.updaterUsername('xibe');
usuario.saludar();
usuario.ingresar();
usuario.updatePassword('coa')
usuario.ingresar();