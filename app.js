/*ESTE CÓDIGO ES CONVENCIONAL DE PRINCIPIANTE
APARTIR DE LA LINEA 15 LO VAMOS A SIMPLIFICAR PARA RECICLAR 
LA FUNCIÓN EN CUALQUIER MOMENTO. */

/*let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Juego número secreto';

let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Indicame un número del 1 al 10';

function intentoUsuario () {
    //alert ('Click desde el boton');
}*/

/*DECLARACION DE FUNCIÓN PARA REUTILIZAR PARA DAR FORMATO
A CUALQUIER ELELMENTO DE HTML*/

let numeroSecreto = 0; //generarNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroUsuario));
    console.log (numeroSecreto);
    console.log(typeof(numeroSecreto));
|    console.log(numeroUsuario);*/
    //console.log(numeroUsuario === numeroSecreto);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //EL USUARIO NO ACERTÓ
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');

        } else {
            asignarTextoElemento('p','EL número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

//CREAMOS UNA FUNCIÓN RECURSIVA
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //SI YA SORTEAMOS TODOS LOS NÚMEROS CERRAMOS EL JUEGO
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p','Ya se asignaron todos los números posibles');
        } else {
        //SI EL NÚMERO GENERADO ESTA INCLUIDO EN LA LISTA HACER LA SIGUIENTE OPERACIÓN
        //UTILIZAR EL METODO INCLUDE
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        
        }
           
            
        }  
        
    }

// FIN DE LA FUNCIÓN RECURSIVA
    

//LLAMAMOS LA FUNCIÓN PARA DAR FORMATO A LOS ELELMENTOS DE HTML.

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p', `Escribe un número del 1 al ${numeroMaximo} y pulsa el botón Intentar`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

condicionesIniciales();
function reiniciarJuego(){
    
    //LIMPIAR CAJA
    limpiarCaja();
    //INDICAR MENSAJE DE INICIO "INTERVALO DE NÚMEROS"
    condicionesIniciales();
    //GENERAR NÚMERO ALEATORIO
    numeroSecreto = generarNumeroSecreto();
    //DESHABILITAR BOTÓN DE NUEVO JUEGO
    document.querySelector('#reiniciar').setAttribute('disabled',true);

    //INICIALIZAR EL NÚMERO DE INTENTOS
   // function generarNumeroSecreto();
}



