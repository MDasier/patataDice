
//TODO modificacion DOM 
    //* Acceder a los elementos del DOM y modificarlos, crear nuevos...
    //? Gestionar los eventos (Pulsa, clica..)

//TODO gestion de clases
    //* Gestion de métodos y funciones

//TODO intervalos, timeouts y bucles
    //* Control del juego mediante intervalos y acciones del usuario

//TODO animaciones patataDice (colores, tiempos...)
    //* Conseguir imagenes y sonidos para las patatas
    //! HAY QUE DECIDIR COMO MOSTRAR LAS PATATAS EN LA PANTALLA:
    //? TAMAÑOS-POSICION. APARECER-DESVANCER. ESTATICAS-DINAMICAS. COLORES-BRILLOS.




//TODO Controlar los botones del ordenador (Cual es pulsable cada vez)
    //* Controlar que no se pueda "apagar" si no está "encendido"

//TODO Encender ordenador:
    //*mostrar opciones: Empezar a jugar, cambiar dificultad, opciones de sonido
//TODO Apagar ordenador: 
    //*apagar pantalla, cerrar bucles/intervalos guardando partida, apagar luces de encendido y encender las de apagado

    //? AL FINAL
    //TODO gestion de sonido. Musica, sonidos de interaccion usuario, errores...
    //* Conseguir sonidos para las acciones, menús y música de fondo del juego
    //! SI TODO VA BIEN --> control responsividad (controlar el tamaño/forma de pantalla)

let juego;
let pantallaOn = false;

let bntON = document.querySelector("#btnON")
bntON.addEventListener("click", ()=>{
    if(pantallaOn){
        pantallaOn=false
        pantalla.classList.toggle("encenderPantalla")
        pantalla.classList.toggle("pantallaApagada")
        pantalla.innerText="ENCIENDE EL ORDENADOR"
        console.log("Apagar")
        juego.stop()
    }else{
        pantallaOn=true
        pantalla.innerText="HAZ CLICK EN LA PANTALLA PARA EMPEZAR"
        pantalla.classList.toggle("encenderPantalla")
        pantalla.classList.toggle("pantallaApagada")
        console.log("Encender")
    }
    
})


let pantalla = document.querySelector("#pantalla")
pantalla.addEventListener("click", ()=>{
    if(pantallaOn){
        pantalla.innerText=""
        juego = new Juego()
        juego.start()
    }else{
        console.log("Enciende la pantalla")
    }
})