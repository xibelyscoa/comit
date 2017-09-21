var jugador= {
    nombre: 'xibe',
    energia: 100,
    vidas: 3,
    perderEnergia: function(danio){
        if (danio<99){
            this.energia= this.energia-danio;
            if (this.energia <100){
                console.log(this.nombre+' Perdiste '+danio+' de energia, te quedan '+this.energia);
                if(this.energia < 0){
                    this.vidas = this.vidas-1;
                    console.log(this.nombre+' acabaste con tu energía y ahora te queda '+this.vidas+' vidas');
                    if (this.vidas<0){
                        console.log(this.nombre+' El juego ha terminado');
                    }
                }
            }
        }
    },
    recuperarEnergia: function(energiaRecuperada){    
        this.energia= this.energia+energiaRecuperada;
        if (this.energia>100){
            console.log(this.nombre+' Has recuperado toda la energia');
        }else{
            console.log(this.nombre+' Has recuperado '+energiaRecuperada+' de energia '+'Tienes en total '+this.energia);
        }
    },
    perderVida:function(){
        this.vidas= this.vidas-1;
        if(this.vida<0){
            console.log(this.nombre+' el juego ha terminado');
        }else{
            console.log(this.nombre+' te quedan '+this.vidas+' vidas');
        }
    },
    recuperarVida: function(){
        this.vidas= this.vidas+1;
        console.log(this.nombre+' Tienes '+this.vidas+' vida');
        if (this.vida < 99){
            console.log(this.nombre+' Ya tienes el máximo de vidas');
        }
    }
}
jugador.perderVida();
jugador.perderEnergia(10);
jugador.perderEnergia(5);
jugador.perderEnergia(15);
jugador.perderEnergia(20);
jugador.recuperarEnergia(10);
jugador.perderEnergia(30);
jugador.perderEnergia(40);
jugador.perderVida();
jugador.recuperarVida();
jugador.recuperarVida();
jugador.recuperarVida();
jugador.perderVida();





