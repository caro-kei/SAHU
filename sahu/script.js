function filtrar(categoria) {
    const productos = document.querySelectorAll(".producto");

    productos.forEach(p => {
        if (categoria === "todos") {
            p.style.display = "block";
        } else {
            p.style.display = p.classList.contains(categoria) ? "block" : "none";
        }
    });
}

let index = 0;
const imagenes = document.querySelectorAll(".carrusel img");

function cambiarImagen() {
    imagenes[index].classList.remove("activo");
    index = (index + 1) % imagenes.length;
    imagenes[index].classList.add("activo");
}

setInterval(cambiarImagen, 3000); // cambia cada 3 segundos