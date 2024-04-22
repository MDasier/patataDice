class Juego{
    constructor(botonesColores){
        //*Variables que "necesito para el juego"
        this.colorIntervalo
        this.intervaloJuego = null;
        this.ronda = 0
        this.jugadorIndex = 0
        this.rondasTotales = 10
        this.secuencia = []
        this.velocidadBrillo = 1000
        this.bloqueoPatatas = true
        this.botonesColores=botonesColores
        /*
        falta cargar sonidos cuando los tenga
        */
    }

    //*METODOS 
    start(){

        botonPlay.disabled=true
        botonPlay.style.opacity="0.4"
        this.actualizarRonda(0)
        this.jugadorIndex=0
        this.secuencia = ["red","blue","green","yellow"]//a mano hasta controlar que se muestre
        this.activarBotonesJugador()
        this.mostrarSecuencia()

    }

    stop(){
        clearInterval(this.intervaloJuego)
        this.intervaloJuego = null;
    }

    actualizarRonda(ronda){//actualizar la ronda
        this.ronda = ronda
        //TODO actualizar texto de numero de ronda cuando lo tenga
    }
    secuenciaColores(){//crear la secuencia que se tiene que replicar
        return Array.from({length:this.rondasTotales}, ()=> this.colorRandom())
    }
    colorRandom(){
        return Math.floor(Math.random()*4)
    }
    darClick(pos){
        console.log(pos)
        !this.bloqueoPatatas && this.comprobarColorJugador(pos)
    }

    mostrarSecuencia(){//enseña la secuencia al jugador para que la copie
        
    } 

    comprobarSecuencia(){//comprobar la secuencia del jugador

    }
    comprobarColorJugador(){//comprobar cada iteracion del jugador

    }
 
    restart(){//reiniciar el juego

    }

    activarBotonesJugador(){
        for(let i=0;i<4;i++){
            this.botonesColores[i].addEventListener("mousedown",()=>{
                this.botonesColores[i].classList.toggle("active")
            })
            this.botonesColores[i].addEventListener("mouseup",()=>{
                this.botonesColores[i].classList.toggle("active")
            })
        }
    }
 
}