  
    //! SI TODO VA BIEN -->
        //TODO control responsividad (controlar el tamaño/forma de pantalla)


//*VARIABLES SCOPE GLOBAL
let juego=null;
let pantallaOn = false;
let controlEncendido=0

//*ELEMENTOS DEL DOM
const pantalla = document.querySelector("#pantalla")
const btnON = document.querySelector("#btnON")
const luzOn = document.querySelector("#luzEncendido")
const luzOff = document.querySelector("#luzApagado")
const coloresJuego = document.querySelector("#coloresJuego")
const botonesJugador = document.getElementsByClassName("botonesJugador")
const textoRonda = document.createElement("p")
const textoMaxRonda = document.createElement("p")


//*CREAMOS BOTONES PARA CONTROLAR EL JUEGO
const botonPlay = document.createElement("button");
const botonVolumen = document.createElement("button");
const botonConfig = document.createElement("button");

//*CREAMOS LAS IMAGENES PARA LOS BOTONES
const imgPlay = document.createElement("img")
const imgVolumen = document.createElement("img")
const imgConfig = document.createElement("img")

//*AÑADIMOS ESTILOS
botonPlay.className="btnControl"//clase para el boton
imgPlay.className="play"//clase para la imagen
botonVolumen.className="btnControl"
imgVolumen.className="volumen"
botonConfig.className="btnControl"
imgConfig.className="ajustes"

//*INSERTAMOS LOS BOTONES EN EL DOM
botonPlay.appendChild(imgPlay)//añadimos la imagen al boton
botonVolumen.appendChild(imgVolumen)
botonConfig.appendChild(imgConfig) 


//*EVENTLISTENERS
btnON.addEventListener("click", encenderPantalla)
botonPlay.addEventListener("click", empezarJuego)
botonConfig.addEventListener("click", ()=>{
    //console.log("BOTON CONFIGURACION")
})

//*FUNCIONES
function encenderPantalla(){
    
    if(pantallaOn){//SI LA PANTALLA ESTA ENCENDIDA --> APAGAR
        pantallaOn=false
        textoRonda.innerText = ""
        pantalla.classList.toggle("encenderPantalla")
        pantalla.classList.toggle("pantallaApagada")
        luzOn.classList.toggle("luzON")
        luzOff.classList.toggle("luzOFF")
        botonPlay.remove()
        botonVolumen.remove() 
        botonConfig.remove() 
        
        if(controlEncendido===1){
            juego.esconderBotones()
        }
        
        
    }else{//SI LA PANTALLA ESTA APAGADA --> ENCENDER
        pantallaOn=true
        pantalla.classList.toggle("encenderPantalla")
        pantalla.classList.toggle("pantallaApagada")
        luzOn.classList.toggle("luzON")
        luzOff.classList.toggle("luzOFF")
        pantalla.appendChild(botonPlay)//añadimos el boton al DOM
        pantalla.appendChild(botonVolumen)//añadimos el boton al DOM
        pantalla.appendChild(botonConfig)//añadimos el boton al DOM
        botonPlay.disabled=false
        botonPlay.style.opacity = "0.8"
        pantalla.append(textoRonda)
        textoRonda.innerText = `Pulsa el boton 'PLAY' para empezar a jugar`
        pantalla.append(textoMaxRonda)
        textoMaxRonda.innerText = `Ronda máxima: ${localStorage.getItem("RondaMax")}`
        
    }
}
function empezarJuego(){
    //console.log("PATATA DICE: START")
    juego = new Juego()
    juego.start()
    botonPlay.disabled=true
    textoRonda.innerText = `RONDA: 0`
    textoMaxRonda.innerText = `Ronda máxima: ${localStorage.getItem("RondaMax")}`
    controlEncendido=1
}
