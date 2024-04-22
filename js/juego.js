class Juego{
    constructor(){
        this.intervaloJuego=null;
    }

    //*METODOS
    start(){
        if (this.intervaloJuego === null) { // Evita crear múltiples intervalos si ya está corriendo
            this.intervaloJuego = setInterval(() => {
                this.gameLoop()
            }, Math.round(1000/60))//FPS:60
        }
    }

    stop(){
        clearInterval(this.intervaloJuego)
        this.intervaloJuego = null;
    }
    
    gameLoop(){//LO QUE PASA CADA TIC DE JUEGO
        //
        console.log("TIC DE JUEGO")
    }
}