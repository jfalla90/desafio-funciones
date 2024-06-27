document.addEventListener('keydown' , function(event){
    if(event.key === "a" || event.key === "A") {
        pintarElemento("pink");
    } else if (event.key === "s" || event.key === "S") {
        pintarElemento("orange");
    } else if (event.key === "d" || event.key === "D") {
        pintarElemento("lightblue");
    };
});

function pintarElemento(color) {
    contenedor = document.getElementById("contenedor");
    contenedor.style.backgroundColor = color ;
};

//-----------------------------------------Evento Agregar / Eliminar div --------------------------//

document.addEventListener('keydown' , function(event){
    if(event.key === "q" || event.key === "Q") {
        agregarElemento("purple");
    } else if (event.key === "w" || event.key === "W") {
        agregarElemento("gray");
    } else if (event.key === "e" || event.key === "E") {
        agregarElemento("#410e0ed8");
    };
});

function agregarElemento(color) {
    cajaDos = document.getElementById("cajaDos");
    nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor = color ;
    cajaDos.appendChild(nuevoDiv);
    }
    