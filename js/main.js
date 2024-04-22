
    
    //TODO Conseguir sonidos para las acciones, menús y música de fondo del juego
    //! SI TODO VA BIEN --> control responsividad (controlar el tamaño/forma de pantalla)


//*VARIABLES SCOPE GLOBAL
let juego=null;
let pantallaOn = false;

//*ELEMENTOS DEL DOM
let pantalla = document.querySelector("#pantalla")
let btnON = document.querySelector("#btnON")
let luzOn = document.querySelector("#luzEncendido")
let luzOff = document.querySelector("#luzApagado")
const botonesColores = document.getElementsByClassName("BOTONES")

//TODO CREAR BOTONES EN LA PANTALLA PARA CONTROLAR EL JUEGO

//*CREAMOS BOTONES PARA CONTROLAR EL JUEGO
const botonPlay = document.createElement("button");//botonplay
const botonPause = document.createElement("button");//botonPause
const botonConfig = document.createElement("button");//botonConfig
//*CREAMOS LAS IMAGENES PARA LOS BOTONES
const imgPlay = document.createElement("img")//imagen del boton
const imgPause = document.createElement("img")//imagen del boton
const imgConfig = document.createElement("img")//imagen del boton
//*AÑADIMOS ESTILOS
botonPlay.className="btnControl"//clase para el boton
imgPlay.className="play"//clase para la imagen
botonPause.className="btnControl"//clase para el boton
imgPause.className="pause"//clase para la imagen
botonConfig.className="btnControl"//clase para el boton
imgConfig.className="ajustes"//clase para la imagen

//?INSERTAMOS LOS BOTONES EN EL DOM
botonPlay.appendChild(imgPlay)//añadimos la imagen al boton
botonPause.appendChild(imgPause)//añadimos la imagen al boton
botonConfig.appendChild(imgConfig)//añadimos la imagen al boton    


//*EVENTLISTENERS
btnON.addEventListener("click", encenderPantalla)
botonPlay.addEventListener("click", empezarJuego)//CON LA PANTALLA ENCENDIDA Y CLICANDO EN BOTONPLAY
botonConfig.addEventListener("click", ()=>{
    console.log("BOTON CONFIGURACION")
})//CON LA PANTALLA ENCENDIDA Y CLICANDO EN BOTONPLAY

//*FUNCIONES
function encenderPantalla(){
    if(pantallaOn){
        pantallaOn=false
        pantalla.classList.toggle("encenderPantalla")
        pantalla.classList.toggle("pantallaApagada")
        luzOn.classList.toggle("luzON")
        luzOff.classList.toggle("luzOFF")
        botonPlay.remove()
        botonPause.remove() 
        botonConfig.remove() 
        
    }else{//EN CASO DE QUERER CONTROLAR EL ENCENDIDO Y APAGADO
        pantallaOn=true
        pantalla.classList.toggle("encenderPantalla")
        pantalla.classList.toggle("pantallaApagada")
        luzOn.classList.toggle("luzON")
        luzOff.classList.toggle("luzOFF")
        pantalla.appendChild(botonPlay)//añadimos el boton al DOM
        pantalla.appendChild(botonPause)//añadimos el boton al DOM
        pantalla.appendChild(botonConfig)//añadimos el boton al DOM
        
        //bntON.disabled = true //deshabilita la funcion de "apagado"
        //bntON.className="disabled" //estilo del cursor para botones deshabilitados
    }
}
function empezarJuego(){
    console.log("PATATA DICE")
    juego = new Juego(botonesColores)
    juego.start()
    console.log(botonesColores)
}