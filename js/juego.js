//TODO Controlar mejor la iluminacion de la secuencia. Si se repite color no se nota el corte, solo se ilumina más tiempo


class Juego{

    constructor(){
        //*Variables control de Juego
        this.ronda = 0
        this.posSecuenciaJugador = 0
        this.arrSecuenciaJugador=[]
        this.rondasTotales = 4
        this.secuencia = []
        this.velocidadBrillo = 1000
        this.bloqueoBotones = true
        this.rojo
        this.azul
        this.verde
        this.amarillo
        this.intervaloSecuencia=null
        
        //*SONIDOS DE LOS BOTONES Y DE 'GANAR'
        this.sonidos= [
                        new Audio("../sonidos/1.wav"),
                        new Audio("../sonidos/2.wav"),
                        new Audio("../sonidos/3.wav"),
                        new Audio("../sonidos/4.wav"),
                        new Audio("../sonidos/win.wav")
                    ]
    }

    //*METODOS 
    start(){

        this.mostrarBotonesColores()
        //botonPlay.disabled=true
        botonPlay.style.opacity="0.4"
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
            this.sonidos[4].play()
            //window.alert("HAS GANADO")
            pantalla.innerText="HAS GANADO"
        }else{
            this.ronda++ 
            this.secuencia.push(this.colorAleatorio())
            this.velocidadBrillo=this.velocidadBrillo-50
            this.arrSecuenciaJugador=[]
            this.mostrarSecuencia()
        }
        

    }
    
    colorAleatorio(){
        return Math.floor(Math.random()*4)
    }

    gameOver(){
        //window.alert('GAME OVER')
        //this.sonidos[4].play()
        pantalla.innerText="GAME OVER"

    }

    clickJugador(id){
        this.sonidos[Number(id)].play()
        this.arrSecuenciaJugador.push(Number(id))
        console.log("RONDA: "+this.ronda)
        console.log(this.secuencia)
        console.log(this.arrSecuenciaJugador)

        
                if(this.secuencia[this.posSecuenciaJugador]===this.arrSecuenciaJugador[this.posSecuenciaJugador]){

                    this.posSecuenciaJugador++

                    if(this.posSecuenciaJugador === this.secuencia.length){
                        console.log("ACTUALIZAR RONDA")
                        this.actualizarRonda()
                    }
                    
                }else{
                    this.gameOver()
                }
        
       
    }//CONTROL EN CADA CLICK DEL JUGADOR QUE "LA PATATA" SEA CORRECTA

    mostrarSecuencia(){
                 
        let secuenciaIndex=0
        this.bloqueoBotones=true//bloquear clicks del jugador
        
        this.intervaloSecuencia=setInterval(()=>{        
            
            if(secuenciaIndex<this.secuencia.length){

                if(secuenciaIndex>0){//toggle numero anterior si existe
                    botonesColores[this.secuencia[secuenciaIndex-1]].classList.toggle("active")
                }
                let secuenciaTemporal=this.secuencia
                setTimeout(()=>{
                    botonesColores[secuenciaTemporal[secuenciaIndex]].classList.toggle("active")
                    this.sonidos[secuenciaTemporal[secuenciaIndex]].play()
                    secuenciaIndex++
                },100)
                                

            }else if(secuenciaIndex===this.secuencia.length){

                botonesColores[this.secuencia[secuenciaIndex-1]].classList.toggle("active")//apaga el ultimo

                this.bloqueoBotones=false//activamos los botones del jugador

                textoRonda.innerText=`RONDA: ${this.ronda}`
                this.posSecuenciaJugador=0
                clearInterval(this.intervaloSecuencia)
                this.intervaloSecuencia=null
            }
            

        },this.velocidadBrillo)
        
    } 

    activarClickJugador(){
        if(this.bloqueoBotones){
            for(let i=0;i<botonesColores.length;i++){
                botonesColores[i].addEventListener("mousedown",()=>{
                    botonesColores[i].classList.toggle("active")
                    this.clickJugador(botonesColores[i].id)
                })
                botonesColores[i].addEventListener("mouseup",()=>{
                    botonesColores[i].classList.toggle("active")
                })
            }
        }        
    }
}