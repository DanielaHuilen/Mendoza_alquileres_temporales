//menu hamburguesa 
var menu= document.querySelector("header nav ul");

document.querySelector(".menu-toggle").addEventListener("click",function(){
    menu.classList.toggle("show");
});

// Función para cambiar imágenes carrusel

document.addEventListener("DOMContentLoaded", function() { 
    let index = 0; // Índice de la imagen actual
    const images = document.querySelectorAll(".carrusel_imagen"); // Seleccionamos todas las imágenes

    function changeImage() {
    // Eliminamos la clase 'active' de todas las imágenes
        images.forEach(img => img.classList.remove("carrusel_imagen_activa"));    
    // Agregamos 'active' a la imagen correspondiente
        images[index].classList.add("carrusel_imagen_activa");
    // Pasamos a la siguiente imagen o volvemos a la primera
        index = (index + 1) % images.length;
    }
    if (images.length > 0 ) { 
        // Ejecutamos la función cada 3 segundos
        setInterval(changeImage, 3000);
    }
});

//Para que los titulos aparezcan en el scroll

document.addEventListener("DOMContentLoaded", function (){
    const titulos= document.querySelectorAll(".titulos, .titulos_departamento");

    function mostrarTitulos(){
        titulos.forEach((titulo)=> {
            const posicion= titulo.getBoundingClientRect().top;
            const alturaPantalla= window.innerHeight;

            if (posicion < alturaPantalla - 100){
                titulo.style.opacity= "1";
                titulo.style.transform= "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll",mostrarTitulos);

    mostrarTitulos();
});

//para que los bloques departamentos aparezcan y las imagenes en los departamentos

document.addEventListener("DOMContentLoaded", function(){
    function animarElementos(selector, delay=200){
        const elementos= document.querySelectorAll(selector);

        const observer= new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * delay); 
                }
            });
        }, { threshold: 0.2});

        elementos.forEach(el=> observer.observe(el));
    }

    animarElementos(".departamento");
    animarElementos(".galeria img", 150)
});



//para la galeria de cada departamento

// Seleccionar elementos
const galleryImages = document.querySelectorAll(".galeria figure img"); // Imágenes de la galería
const modal = document.getElementById("modal"); // Modal
const modalImg = document.getElementById("modal-img"); // Imagen dentro del modal
const closeModal = document.getElementById("close"); // Botón de cierre

// Comprueba que los elementos de la galería existan antes de añadir eventos
if (galleryImages.length > 0 && modal && modalImg && closeModal) {
    // Evento para abrir el modal con la imagen clickeada
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex"; // Mostrar modal
            modalImg.src = img.src; // Asignar la imagen al modal
        });
    });

    // Evento para cerrar el modal al hacer clic en el botón "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Ocultar modal
    });

    // Evento para cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none"; // Ocultar modal
        }
    });
}
