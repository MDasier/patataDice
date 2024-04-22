class Juego{
    constructor(){
        this.intervaloJuego = null;
        this.ronda = 0
        this.rondasTotales = 10
        this.secuencia = []
        this.velocidadBrillo = 1000
        this.bloqueoPatatas = true
        this.patatas = null //! meter las "patatas clickables" en un array
        /*
        falta cargar sonidos cuando los tenga
        */
    }

    //*METODOS
    start(){
/*      //controlariamos el bucle de juego en modo patata caliente
        if (this.intervaloJuego === null) { 
            this.intervaloJuego = setInterval(() => {
                this.gameLoop()
            }, Math.round(1000/60))//FPS:60
        }
*/

    }

    stop(){
        clearInterval(this.intervaloJuego)
        this.intervaloJuego = null;
    }


    /* //Si el modo de juego es el de patata caliente
    gameLoop(){//LO QUE PASA CADA TIC DE JUEGO
        console.log("Bucle de juego en marcha")
    }
    */
}