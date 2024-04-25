class Juego{

    constructor(){
        //*Variables control de Juego
        this.ronda = 0
        this.rondaMax = localStorage.getItem("RondaMax")
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
        this.patata4
        this.patata5
        this.patata6
        this.patata7
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
        textoMaxRonda.innerText=""
        textoRonda.innerText=""
        textoMaxRonda.style.top="85%"
        textoMaxRonda.style.left="5px"
        
        botonPlay.disabled=true
        botonPlay.style.opacity="0.4"
        
        this.posSecuenciaJugador=0
        this.secuencia = [this.patataAleatoria()]
        this.arrSecuenciaJugador = []
        this.ronda = 0

        this.mostrarPatatas()
        this.mostrarSecuencia()
        this.activarClickJugador()

        botonVolumen.addEventListener("click", ()=>{this.sonidos.forEach((elem)=>{
            
                if(elem.muted){
                    elem.muted=false
                    botonVolumen.style.opacity="1"
                }else{
                    elem.muted=true
                    botonVolumen.style.opacity="0.5"
                }
            })
        })
    }

    esconderBotones(){
        
        this.patata0.remove()
        this.patata1.remove()
        this.patata2.remove()
        this.patata3.remove()
        this.patata4.remove()
        this.patata5.remove()
        this.patata6.remove()
        this.patata7.remove()
        textoMaxRonda.remove()
        textoRonda.remove()
        
    }

    mostrarPatatas(){
        //?POSICIONES 'ALEATORIAS' PARA LAS PATATAS
        let top1 = Math.floor(Math.random()*21)
        let top2 = top1 + 50
        let top3 = Math.floor(Math.random()*21) + 110
        let top4 = top3 + 50
        let left1 = Math.floor(Math.random()*7) + 10
        let left2 = Math.floor(Math.random()*12) + 116
        let left3 = Math.floor(Math.random()*70) + 212
        let left4 = left3 + 50

        //4 PATATAS DE INICIO
        this.patata0 = document.createElement("button")
        this.patata0.classList.add("botonesJugador")
        this.patata0.classList.add("patata0")
        this.patata0.id = "0"
        this.patata0.style.top = `${top1}px`
        this.patata0.style.left = `${left1}px`

        this.patata1 = document.createElement("button")
        this.patata1.classList.add("botonesJugador")
        this.patata1.classList.add("patata1")
        this.patata1.id = "1"
        this.patata1.style.top = `${top2}px`
        this.patata1.style.left = `${left2}px`

        this.patata2 = document.createElement("button")
        this.patata2.classList.add("botonesJugador")
        this.patata2.classList.add("patata2")
        this.patata2.id = "2"
        this.patata2.style.top = `${top1}px`
        this.patata2.style.left = `${left3}px`

        this.patata3 = document.createElement("button")
        this.patata3.classList.add("botonesJugador")
        this.patata3.classList.add("patata3")
        this.patata3.id = "3"
        this.patata3.style.top = `${top2}px`
        this.patata3.style.left = `${left4}px`

        coloresJuego.appendChild(this.patata0)
        this.patata0.style.display="none"
        coloresJuego.appendChild(this.patata1)
        this.patata1.style.display="none"
        coloresJuego.appendChild(this.patata2)
        this.patata2.style.display="none"
        coloresJuego.appendChild(this.patata3)
        this.patata3.style.display="none"

        //4 PATATAS MÁS PARA AÑADIR DIFICULTAD
        this.patata4 = document.createElement("button")
        this.patata4.classList.add("botonesJugador")
        this.patata4.classList.add("patata4")
        this.patata4.id = "4"
        this.patata4.style.top = `${top4}px`
        this.patata4.style.left = `${left1}px`

        this.patata5 = document.createElement("button")
        this.patata5.classList.add("botonesJugador")
        this.patata5.classList.add("patata5")
        this.patata5.id = "5"
        this.patata5.style.top = `${top3}px`
        this.patata5.style.left = `${left2}px`

        this.patata6 = document.createElement("button")
        this.patata6.classList.add("botonesJugador")
        this.patata6.classList.add("patata6")
        this.patata6.id = "6"
        this.patata6.style.top = `${top3}px`
        this.patata6.style.left = `${left3}px`

        this.patata7 = document.createElement("button")
        this.patata7.classList.add("botonesJugador")
        this.patata7.classList.add("patata7")
        this.patata7.id = "7"
        this.patata7.style.top = `${top4}px`
        this.patata7.style.left = `${left4}px`

        coloresJuego.appendChild(this.patata4)
        this.patata4.style.display="none"
        coloresJuego.appendChild(this.patata5)
        this.patata5.style.display="none"
        coloresJuego.appendChild(this.patata6)
        this.patata6.style.display="none"
        coloresJuego.appendChild(this.patata7)
        this.patata7.style.display="none"
    }

    actualizarRonda(){
        if(this.ronda===this.rondasTotales){
            this.sonidos[4].play()
            //window.alert("HAS GANADO")
            textoRonda.innerText="HAS GANADO"
            if(Number(localStorage.getItem("RondaMax"))<this.ronda){
                this.rondaMax=this.ronda
                localStorage.setItem("RondaMax", this.rondaMax)
            }  
        }else{
            this.ronda++ 
            if(Number(localStorage.getItem("RondaMax"))<this.ronda){
                this.rondaMax=this.ronda
                localStorage.setItem("RondaMax", this.rondaMax)
            }           
            
            this.secuencia.push(this.patataAleatoria())
            this.velocidadBrillo=this.velocidadBrillo-100
            this.arrSecuenciaJugador=[]
            this.mostrarSecuencia()
        }
        

    }
    
    patataAleatoria(){
        return Math.floor(Math.random()*8)
    }

    gameOver(){
        this.esconderBotones()
        //window.alert('GAME OVER')
        //this.sonidos[4].play()
        botonPlay.disabled = false
        botonPlay.style.opacity = "0.8"
        botonVolumen.style.opacity="1"
        
        pantalla.append(textoRonda)
        textoRonda.innerText = `Pulsa el boton 'PLAY' para empezar a jugar`
        pantalla.append(textoMaxRonda)
        textoMaxRonda.innerText = "GAME OVER"
        textoMaxRonda.style.top="35%"
        textoMaxRonda.style.left="35%"

        pantalla.appendChild(botonPlay)//añadimos el boton al DOM
        pantalla.appendChild(botonVolumen)//añadimos el boton al DOM
        pantalla.appendChild(botonConfig)//añadimos el boton al DOM

    }

    clickJugador(id){
        if(Number(id)>=0 && (Number(id)<=3)){
            this.sonidos[Number(id)].play()
        }else{
            this.sonidos[(Number(id))-4].play()
        }
        
        this.arrSecuenciaJugador.push(Number(id))

        
        if(this.secuencia[this.posSecuenciaJugador]===this.arrSecuenciaJugador[this.posSecuenciaJugador]){

            this.posSecuenciaJugador++

                if(this.posSecuenciaJugador === this.secuencia.length){
                    //console.log("ACTUALIZAR RONDA")
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

                if(secuenciaIndex>0){//toggle numero anterior 'si existe'
                    botonesJugador[this.secuencia[secuenciaIndex-1]].classList.toggle("active")
                    botonesJugador[this.secuencia[secuenciaIndex-1]].style.display="none"
                    
                }else{
                    botonesJugador[0].style.display="none"
                    botonesJugador[1].style.display="none"
                    botonesJugador[2].style.display="none"
                    botonesJugador[3].style.display="none"
                    botonesJugador[4].style.display="none"
                    botonesJugador[5].style.display="none"
                    botonesJugador[6].style.display="none"
                    botonesJugador[7].style.display="none"
                }

                let secuenciaTemporal=this.secuencia
                setTimeout(()=>{

                    botonesJugador[secuenciaTemporal[secuenciaIndex]].classList.toggle("active")
                    botonesJugador[this.secuencia[secuenciaIndex]].style.display="block"
                    if(secuenciaTemporal[secuenciaIndex]>=0 && (secuenciaTemporal[secuenciaIndex]<=3)){
                        this.sonidos[secuenciaTemporal[secuenciaIndex]].play()
                    }else{
                        this.sonidos[(secuenciaTemporal[secuenciaIndex])-4].play()
                    }
                    //this.sonidos[secuenciaTemporal[secuenciaIndex]].play()
                    secuenciaIndex++

                },100)
                                

            }else if(secuenciaIndex===this.secuencia.length){

                botonesJugador[this.secuencia[secuenciaIndex-1]].classList.toggle("active")//apaga el ultimo

                this.bloqueoBotones=false//activamos los botones del jugador

                textoRonda.innerText=`RONDA: ${this.ronda}`
                textoMaxRonda.innerText = `Ronda máxima: ${localStorage.getItem("RondaMax")}`
                this.posSecuenciaJugador=0

                botonesJugador[0].style.display="block"
                botonesJugador[1].style.display="block"
                botonesJugador[2].style.display="block"
                botonesJugador[3].style.display="block"
                botonesJugador[4].style.display="block"
                botonesJugador[5].style.display="block"
                botonesJugador[6].style.display="block"
                botonesJugador[7].style.display="block"

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