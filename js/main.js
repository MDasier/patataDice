  
    //! SI TODO VA BIEN -->
        //TODO control responsividad (controlar el tamaño/forma de pantalla)


//*VARIABLES SCOPE GLOBAL
let juego=null;
let pantallaOn = false;
let controlEncendido=0
let codigoSecret = ""

//*ELEMENTOS DEL DOM
const pantalla = document.querySelector("#pantalla")
const btnON = document.querySelector("#btnON")
const luzOn = document.querySelector("#luzEncendido")
const luzOff = document.querySelector("#luzApagado")
const coloresJuego = document.querySelector("#coloresJuego")
const botonesJugador = document.getElementsByClassName("botonesJugador")
const textoRonda = document.createElement("p")
const textoMaxRonda = document.createElement("p")
//CREAMOS BOTONES PARA CONTROLAR EL INICIO, VOLUMEN Y CONFIGURACION DEL JUEGO
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
botonVolumen.style.opacity="1"
imgVolumen.className="volumen"
botonConfig.className="btnControl"
botonConfig.style.opacity="0.8"
imgConfig.className="ajustes"
textoRonda.style.position="absolute"
textoRonda.style.top="0px"
textoRonda.style.right="5px"
textoMaxRonda.style.position="absolute"
textoMaxRonda.style.top="85%"
textoMaxRonda.style.left="5px"

//*INSERTAMOS LOS BOTONES EN EL DOM
botonPlay.appendChild(imgPlay)//añadimos la imagen al boton
botonVolumen.appendChild(imgVolumen)
botonConfig.appendChild(imgConfig) 


//*EVENTLISTENERS
btnON.addEventListener("click", encenderPantalla)
botonPlay.addEventListener("click", empezarJuego)
botonConfig.addEventListener("click", ()=>{
    //TODO Añadir contenido más adelante para poder cambiar el modo de juego etc.
    //?En la clase juego este boton añade una ronda a rondasTotales para alargar la partida.
})
document.addEventListener("keydown", codigoSecreto)

//*FUNCIONES
function codigoSecreto(event){
    if(event.code==="Keyk" || event.code==="KeyK"){
        codigoSecret+="K"
    }
    if(event.code==="Keyo" || event.code==="KeyO"){
        codigoSecret+="O"
    }
    if(event.code==="Keyn" || event.code==="KeyN"){
        codigoSecret+="N"
    }
    if(event.code==="Keya" || event.code==="KeyA"){
        codigoSecret+="A"
    }
    if(event.code==="Keym" || event.code==="KeyM"){
        codigoSecret+="M"
    }
    if(event.code==="Keyi" || event.code==="KeyI"){  
        codigoSecret+="I"
        
    }
    if(event.code==="Backspace"){
        codigoSecret=""
    }
    if(codigoSecret==="KONAMI"){
        //window.alert(codigoSecret)
        window.close()
    }
}



function encenderPantalla(){
    
    if(pantallaOn){//SI LA PANTALLA ESTA ENCENDIDA --> APAGAR
        pantallaOn=false
        textoRonda.innerText = ""
        textoMaxRonda.innerText = ""
        pantalla.classList.toggle("encenderPantalla")
        pantalla.classList.toggle("pantallaApagada")
        luzOn.classList.toggle("luzON")
        luzOff.classList.toggle("luzOFF")
        botonPlay.remove()
        botonVolumen.remove() 
        botonConfig.remove() 
        pantalla.style.background=""
        
        if(controlEncendido===1){
            juego.esconderBotones()
        }
        
        
    }else{//SI LA PANTALLA ESTA APAGADA --> ENCENDER
        pantallaOn=true
        pantalla.classList.toggle("encenderPantalla")
        pantalla.classList.toggle("pantallaApagada")
        luzOn.classList.toggle("luzON")
        luzOff.classList.toggle("luzOFF")
        
        botonPlay.disabled=false
        botonPlay.style.opacity = "0.8"
        pantalla.append(textoRonda)
        textoRonda.innerText = `Pulsa el boton 'PLAY' para empezar a jugar`
        pantalla.append(textoMaxRonda)
        textoMaxRonda.innerText = `Ronda máxima: ${localStorage.getItem("RondaMax")}`

        pantalla.appendChild(botonPlay)//añadimos el boton al DOM
        pantalla.appendChild(botonVolumen)//añadimos el boton al DOM
        botonVolumen.style.opacity="1"
        pantalla.appendChild(botonConfig)//añadimos el boton al DOM
        botonConfig.title="AÑADE UNA RONDA DE JUEGO CON CADA CLICK"
        
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
