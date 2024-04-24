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
        this.patata0
        this.patata1
        this.patata2
        this.patata3
        this.intervaloSecuencia=null
        
        //*SONIDOS DE LOS BOTONES Y DE 'GANAR'
        this.sonidos= [
                        new Audio("./sonidos/1.wav"),
                        new Audio("./sonidos/2.wav"),
                        new Audio("./sonidos/3.wav"),
                        new Audio("./sonidos/4.wav"),
                        new Audio("./sonidos/win.wav")
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
        this.patata0.remove()
        this.patata1.remove()
        this.patata2.remove()
        this.patata3.remove()
    }

    mostrarBotonesColores(){
        this.patata0 = document.createElement("button")
        this.patata0.classList.add("botonesJugador")
        this.patata0.classList.add("patata0")
        this.patata0.id = "0"

        this.patata1 = document.createElement("button")
        this.patata1.classList.add("botonesJugador")
        this.patata1.classList.add("patata1")
        this.patata1.id = "1"

        this.patata2 = document.createElement("button")
        this.patata2.classList.add("botonesJugador")
        this.patata2.classList.add("patata2")
        this.patata2.id = "2"

        this.patata3 = document.createElement("button")
        this.patata3.classList.add("botonesJugador")
        this.patata3.classList.add("patata3")
        this.patata3.id = "3"

        coloresJuego.appendChild(this.patata0)
        this.patata0.style.display="none"
        coloresJuego.appendChild(this.patata1)
        this.patata1.style.display="none"
        coloresJuego.appendChild(this.patata2)
        this.patata2.style.display="none"
        coloresJuego.appendChild(this.patata3)
        this.patata3.style.display="none"
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
                    botonesJugador[this.secuencia[secuenciaIndex-1]].classList.toggle("active")
                    botonesJugador[this.secuencia[secuenciaIndex-1]].style.display="none"/*
                    botonesJugador[1].style.display="none"
                    botonesJugador[2].style.display="none"
                    botonesJugador[3].style.display="none"*/
                    
                }else{
                    botonesJugador[0].style.display="none"
                    botonesJugador[1].style.display="none"
                    botonesJugador[2].style.display="none"
                    botonesJugador[3].style.display="none"
                }

                let secuenciaTemporal=this.secuencia
                setTimeout(()=>{

                    botonesJugador[secuenciaTemporal[secuenciaIndex]].classList.toggle("active")
                    botonesJugador[this.secuencia[secuenciaIndex]].style.display="block"
                    this.sonidos[secuenciaTemporal[secuenciaIndex]].play()
                    secuenciaIndex++

                },100)
                                

            }else if(secuenciaIndex===this.secuencia.length){

                botonesJugador[this.secuencia[secuenciaIndex-1]].classList.toggle("active")//apaga el ultimo

                this.bloqueoBotones=false//activamos los botones del jugador

                textoRonda.innerText=`RONDA: ${this.ronda}`
                this.posSecuenciaJugador=0
                botonesJugador[0].style.display="block"
                botonesJugador[1].style.display="block"
                botonesJugador[2].style.display="block"
                botonesJugador[3].style.display="block"
                clearInterval(this.intervaloSecuencia)
                this.intervaloSecuencia=null
            }
            

        },this.velocidadBrillo)
        
    } 

    activarClickJugador(){
        if(this.bloqueoBotones){
            for(let i=0;i<botonesJugador.length;i++){
                botonesJugador[i].addEventListener("mousedown",()=>{
                    botonesJugador[i].classList.toggle("active")
                    this.clickJugador(botonesJugador[i].id)
                })
                botonesJugador[i].addEventListener("mouseup",()=>{
                    botonesJugador[i].classList.toggle("active")
                })
            }
        }        
    }
}