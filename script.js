window.onload = function () {
    // Variables

    // Añadir las tres imágenes del directorio "img" al array IMAGENES.
    const IMAGENES = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg"];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder=document.getElementById('retroceder');
    let $botonAvanzar =document.getElementById('avanzar');
    let $imagen = document.getElementById('imagen');
    let $botonPlay =document.getElementById('play');
    let $botonStop=document.getElementById('stop');
     let follow=document.getElementById('follow');

    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        // se incrementa el indice (posicionActual)
posicionActual++;
if (posicionActual==IMAGENES.length){
    posicionActual=0;
}
        // ...y se muestra la imagen que toca.
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if (posicionActual==0){
    posicionActual=IMAGENES.length;
}
        // se incrementa el indice (posicionActual)
posicionActual--;
        // ...y se muestra la imagen que toca.
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {

 $intervalo= setInterval(function(){ pasarFoto() }, 2000);

        // Documentación de la función setInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
        // Mediante la función setInterval() se ejecuta la función pasarFoto cada TIEMPO_INTERVALO_MILESIMAS_SEG.
        $botonAvanzar.disabled = true;
$botonRetroceder.disabled = true;
$botonStop.disabled = false;
$botonPlay.disabled = true;
        // Desactivamos los botones de control necesarios. Utilizando setAttribute y removeAttribute.

    }

    /**
     * Para el autoplay de la imagen
     */
     function afegirnom(){
follow.innerHTML=IMAGENES[posicionActual];
     }
    function stopIntervalo() {
        $botonAvanzar.disabled = false;
$botonRetroceder.disabled = false;
$botonStop.disabled = true;
$botonPlay.disabled = false;
        // Desactivar la ejecución de intervalo.
clearInterval(intervalo);
        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
    }

    // Eventos
    // Añadimos los evenntos necesarios para cada boton. Mediante addEventListener.
$botonRetroceder.addEventListener('click',function(){retrocederFoto(),afegirnom()}, false);
$botonAvanzar.addEventListener('click',function(){pasarFoto(),afegirnom()}, false);
$botonPlay.addEventListener('click',function(){playIntervalo(),afegirnom()}, false);
$botonStop.addEventListener('click',function(){stopIntervalo(),afegirnom()}, false);
    // Iniciar
    $imagen.addEventListener("mouseover", function() {afegirnom()});
    renderizarImagen();



let zoom = 1;
    const speed = 0.03;

    document.addEventListener("wheel", function(e) {

        if(e.deltaY > 0){
            $imagen.style.transform = `scale(${zoom += speed})`;
        }else{
            $imagen.style.transform = `scale(${zoom -= speed})`;
        }

    });


} 
