const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    // Alternamos la clase 'active' para mostrar el menú
    navMenu.classList.toggle('active');
    // Alternamos 'is-active' para que la hamburguesa se vuelva una X
    menuToggle.classList.toggle('is-active');
});

// Opcional: Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-list a').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('is-active');
}));