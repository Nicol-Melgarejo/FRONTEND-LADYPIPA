document.addEventListener("DOMContentLoaded", () => {
    // Función genérica para inicializar carruseles
    function initializeCarousel(slidesSelector, dotsSelector, prevButtonSelector, nextButtonSelector) {
        const slides = document.querySelectorAll(slidesSelector);
        const dots = document.querySelectorAll(dotsSelector);
        const prevButton = document.querySelector(prevButtonSelector);
        const nextButton = document.querySelector(nextButtonSelector);

        let currentIndex = 0;

        // Función para actualizar el carrusel
        const updateCarousel = (index) => {
            slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
            dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        };

        // Evento para botón "Anterior"
        prevButton?.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel(currentIndex);
        });

        // Evento para botón "Siguiente"
        nextButton?.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel(currentIndex);
        });

        // Evento para puntos de navegación
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentIndex = i;
                updateCarousel(currentIndex);
            });
        });

        // Inicializar el carrusel mostrando la primera diapositiva
        updateCarousel(currentIndex);
    }

    // Inicialización de Carruseles
    initializeCarousel(".first-carousel-slide", ".first-dot", ".first-prev", ".first-next");
    initializeCarousel(".carousel-slide-2", ".carousel-dot-2", ".carousel-button-2.prev", ".carousel-button-2.next");

    // Slider horizontal para imágenes
    const sliderContainer = document.querySelector(".slider-images");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (sliderContainer) {
        let currentPosition = 0;
        const imageWidth = sliderContainer.children[0]?.offsetWidth + 20 || 220; // Ancho de imagen + margen

        nextBtn?.addEventListener("click", () => {
            if (currentPosition > -(imageWidth * (sliderContainer.children.length - 5))) {
                currentPosition -= imageWidth;
                sliderContainer.style.transform = `translateX(${currentPosition}px)`;
            }
        });

        prevBtn?.addEventListener("click", () => {
            if (currentPosition < 0) {
                currentPosition += imageWidth;
                sliderContainer.style.transform = `translateX(${currentPosition}px)`;
            }
        });
    }

    // Efecto de ocultar barra superior al hacer scroll
    const topBar = document.querySelector(".top-bar");
    const navbar = document.querySelector(".navbar");

    if (topBar && navbar) {
        document.addEventListener("scroll", () => {
            const maxTopBarHeight = 35;
            const newTopBarHeight = Math.max(maxTopBarHeight - window.scrollY, 0);

            topBar.style.height = `${newTopBarHeight}px`;
            topBar.style.opacity = newTopBarHeight / maxTopBarHeight;
            navbar.style.top = `${newTopBarHeight}px`;
        });
    }
});
