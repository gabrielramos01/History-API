
function comenzar(){

    zonadatos=document.getElementById("zonadatos");

    url=document.getElementById("url");

    url.addEventListener("click", cambiaurl, false);

    window.addEventListener("popstate", nuevaurl, false); // contiene una copia del historial de entradas del objeto estado
    
    window.history.replaceState(1, null); // Reemplaza la informacion de la entrada del historial actual

}

function cambiaurl(){

    mostrar(2);

    window.history.pushState(2, null, "pagina2.html"); //Crea una nueva entrada en el historial

}

function nuevaurl(e){

    mostrar(e.state); // Esta propiedad devuelve el valor de estado de la entrada actual

}

function mostrar(actual){

    zonadatos.innerHTML="Estas en la pagina. " + actual;

}

window.addEventListener("load", comenzar, false);