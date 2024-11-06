 // Aquí tu código

 const boton = document.getElementById("agregar");
 const lista = document.getElementById("lista");

console.log(boton)
console.log(lista)

boton.addEventListener("click", function() {
    let cartel = prompt("Imprime en pantalla:");
    
    if (cartel) {
        let nuevoLi = document.createElement("li");

        const respuesta = document.createTextNode(cartel);

        nuevoLi.appendChild(respuesta);

        lista.appendChild(nuevoLi);
    }
});




