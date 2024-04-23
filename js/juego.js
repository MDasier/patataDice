class Juego{

    constructor(botonesColores){
        //*Variables control de Juego
        this.ronda = 0
        this.jugadorIndex = 0
        this.arrSecuenciaJugador=[]
        this.rondasTotales = 10
        this.secuencia = []
        this.velocidadBrillo = 1000
        this.bloqueoBotones = true
        this.rojo
        this.azul
        this.verde
        this.amarillo
        this.botonesColores=botonesColores//*BOTONES CLICKABLES DEL JUGADOR que recibimos al crear la clase juego

        /*
        falta cargar sonidos cuando los tenga
        */
    }

    //*METODOS 
    start(){
        //TODO Intervalo de juego
        //TODO Mostrar los botones de juego
        this.mostrarBotonesColores()
        //botonPlay.disabled=true
        botonPlay.style.opacity="0.4"
        this.actualizarRonda(1)
        this.posSecuenciaJugador=0
        this.secuencia = [1,2,0,1] //this.secuenciaColores(this.ronda)
        this.mostrarSecuencia()
        this.activarBotonesJugador()       

    }

    esconderBotones(){
        this.rojo.remove()
        this.azul.remove()
        this.verde.remove()
        this.amarillo.remove()
    }

    mostrarBotonesColores(){
        this.rojo = document.createElement("button")
        this.rojo.classList.add("BOTONES")
        this.rojo.classList.add("rojo")
        this.rojo.id = "0"

        this.azul = document.createElement("button")
        this.azul.classList.add("BOTONES")
        this.azul.classList.add("azul")
        this.azul.id = "1"

        this.verde = document.createElement("button")
        this.verde.classList.add("BOTONES")
        this.verde.classList.add("verde")
        this.verde.id = "2"

        this.amarillo = document.createElement("button")
        this.amarillo.classList.add("BOTONES")
        this.amarillo.classList.add("amarillo")
        this.amarillo.id = "3"

        coloresJuego.appendChild(this.rojo)
        coloresJuego.appendChild(this.azul)
        coloresJuego.appendChild(this.verde)
        coloresJuego.appendChild(this.amarillo)
    }

    stop(){
        //clearInterval(this.intervaloJuego)
        //this.intervaloJuego = null;
    }

    actualizarRonda(ronda){//actualizar la ronda
        this.ronda = ronda
        this.velocidadBrillo
        //TODO actualizar texto de numero de ronda cuando lo tenga
    }
    
    clickJugador(id){
        console.log(id)

        //TODO Controlar que sigua la secuencia
        //TODO aumentar la posicion de la secuencia del jugador
        //TODO guardar la posicion actual en arrSecuenciaJugador
        this.comprobarSecuencia()
    }

    mostrarSecuencia(){//enseña la secuencia al jugador para que la copie
        //TODO desactivar clics del jugador
        //TODO mostrar la secuencia recibida
        //TODO activar clics del jugador
    } 

    comprobarSecuencia(){//comprobar la secuencia del jugador
        //?SI LA SECUENCIA QUE SE ACABA DE MOSTRAR Y LA DEL JUGADOR SON IGUALES, RETURN TRUE

        //actualizar ronda si todo va bien
        //this.actualizarRonda(this.ronda+1)
    }

    activarBotonesJugador(){//añadimos el evento click a los botones
        //if(this.bloqueoBotones){
            for(let i=0;i<this.botonesColores.length;i++){
                this.botonesColores[i].addEventListener("mousedown",()=>{
                    this.botonesColores[i].classList.toggle("active")
                    this.clickJugador(this.botonesColores[i].id)
                    //this.clickJugador(this.botonesColores[i].classList[1])//pasa ek color del boton que se clicka
                })
                this.botonesColores[i].addEventListener("mouseup",()=>{
                    this.botonesColores[i].classList.toggle("active")
                })
            }
        //}        
    }

    restart(){//reiniciar el juego

    }
 
}