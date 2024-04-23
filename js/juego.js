class Juego{

    constructor(){
        //*Variables control de Juego
        this.ronda = 0
        this.posSecuenciaJugador = 0
        this.arrSecuenciaJugador=[]
        this.rondasTotales = 10
        this.secuencia = []
        this.velocidadBrillo = 1000
        this.bloqueoBotones = true
        this.rojo
        this.azul
        this.verde
        this.amarillo
        
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
        this.actualizarRonda()
        this.posSecuenciaJugador=0
        this.secuencia = [0,2,1] 
        this.mostrarSecuencia()
        //this.activarClickJugador()//!DEBERIA LLAMAR A ESTA FUNCION SOLO CUANDO SEA TURNO DEL JUGADOR      

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

    actualizarRonda(){
        if(this.ronda===this.rondasTotales){
            //fin juego
        }
        this.ronda ++ 
        this.secuencia.push(this.colorAleatorio())
        this.velocidadBrillo=this.velocidadBrillo-(5*this.ronda)

        //TODO actualizar texto de numero de ronda cuando lo tenga
    }
    
    colorAleatorio(){
        return Math.floor(Math.random()*4)
    }

    clickJugador(id){
        console.log(id)
        this.posSecuenciaJugador++

        //TODO Controlar que siga la secuencia

        //TODO aumentar la posicion de la secuencia del jugador

        //TODO guardar la posicion actual en arrSecuenciaJugador

        this.comprobarSecuencia(this.arrSecuenciaJugador)
    }

    mostrarSecuencia(){//enseña la secuencia al jugador para que la copie
                 
        let secuenciaIndex=0
        let intervaloSecuencia=setInterval(()=>{
            this.bloqueoBotones=true//bloquear clicks del jugador
            if(secuenciaIndex<this.secuencia.length){
                botonesColores[this.secuencia[secuenciaIndex]].classList.toggle("active")
                if(secuenciaIndex-1>=0){//toggle numero anterior si existe
                    botonesColores[this.secuencia[secuenciaIndex-1]].classList.toggle("active")
                }
            }else{
                botonesColores[this.secuencia[secuenciaIndex-1]].classList.toggle("active")//apaga el ultimo
                this.bloqueoBotones=false//activamos los botones del jugador
                this.activarClickJugador()
                this.actualizarRonda()
                clearInterval(intervaloSecuencia)
            }
            secuenciaIndex++
            console.log(secuenciaIndex)
            
        },this.velocidadBrillo)
        
        this.bloqueoBotones=false
    } 

    comprobarSecuencia(arr){//comprobar la secuencia del jugador
        //?SI LA SECUENCIA QUE SE ACABA DE MOSTRAR Y LA DEL JUGADOR SON IGUALES, RETURN TRUE

        //actualizar ronda si todo va bien
        //this.actualizarRonda(this.ronda+1)

    }

    activarClickJugador(){//añadimos el evento click a los botones
        if(!this.bloqueoBotones){
            for(let i=0;i<botonesColores.length;i++){
                botonesColores[i].addEventListener("mousedown",()=>{
                    botonesColores[i].classList.toggle("active")
                    this.clickJugador(botonesColores[i].id)
                    //this.clickJugador(this.botonesColores[i].classList[1])//pasa ek color del boton que se clicka
                })
                botonesColores[i].addEventListener("mouseup",()=>{
                    botonesColores[i].classList.toggle("active")
                })
            }
        }        
    }
 
}