//TODO Controlar mejor la iluminacion de la secuencia. Si se repite color no se nota el corte, solo se ilumina más tiempo
//TODO añadir sonidos

class Juego{

    constructor(){
        //*Variables control de Juego
        this.ronda = 0
        this.posSecuenciaJugador = 0
        this.arrSecuenciaJugador=[]
        this.rondasTotales = 9
        this.secuencia = []
        this.velocidadBrillo = 1000
        this.bloqueoBotones = true
        this.rojo
        this.azul
        this.verde
        this.amarillo
        this.intervaloSecuencia=null
        
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
        //this.actualizarRonda()
        this.posSecuenciaJugador=0
        this.secuencia = [this.colorAleatorio()] 
        this.mostrarSecuencia()
        this.activarClickJugador()

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
            console.log("HAS GANADO")
        }else{
            this.ronda++ 
            this.secuencia.push(this.colorAleatorio())
            //this.velocidadBrillo=this.velocidadBrillo-(5*this.ronda)
            this.mostrarSecuencia()
        }
        
        //TODO actualizar texto de numero de ronda cuando lo tenga
    }
    
    colorAleatorio(){
        return Math.floor(Math.random()*4)
    }

    clickJugador(id){
        
        this.arrSecuenciaJugador.push(Number(id))
        this.posSecuenciaJugador++

        for(let c=0;c<this.secuencia.length;c++){
            if(this.secuencia[c]===this.arrSecuenciaJugador[c]){

                if(this.posSecuenciaJugador===this.secuencia.length){
                    console.log("ACTUALIZAR RONDA")
                    this.actualizarRonda()
                }
                
            }
        }
            
         
    }

    mostrarSecuencia(){
                 
        let secuenciaIndex=0
        this.bloqueoBotones=true//bloquear clicks del jugador
        
        this.intervaloSecuencia=setInterval(()=>{        
            
            if(secuenciaIndex<this.secuencia.length){

                botonesColores[this.secuencia[secuenciaIndex]].classList.toggle("active")
                
                if(secuenciaIndex>0){//toggle numero anterior si existe
                    botonesColores[this.secuencia[secuenciaIndex-1]].classList.toggle("active")
                }

            }else if(secuenciaIndex===this.secuencia.length){

                botonesColores[this.secuencia[secuenciaIndex-1]].classList.toggle("active")//apaga el ultimo

                this.bloqueoBotones=false//activamos los botones del jugador

                //this.activarClickJugador()
                this.posSecuenciaJugador=0
                clearInterval(this.intervaloSecuencia)
                this.intervaloSecuencia=null
            }
            secuenciaIndex++

        },this.velocidadBrillo)
        
    } 

    activarClickJugador(){//añadimos el evento click a los botones
        //if(!this.bloqueoBotones){
            for(let i=0;i<botonesColores.length;i++){
                botonesColores[i].addEventListener("mousedown",()=>{
                    botonesColores[i].classList.toggle("active")
                    this.clickJugador(botonesColores[i].id)
                })
                botonesColores[i].addEventListener("mouseup",()=>{
                    botonesColores[i].classList.toggle("active")
                })
            }
        //}        
    }
 
}