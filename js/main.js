// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Toggle modo oscuro
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Inicializar ScrollSpy (solo si Bootstrap está cargado)
  if (typeof bootstrap !== 'undefined') {
    new bootstrap.ScrollSpy(document.body, {
      target: '#navbar',
      offset: 70
    });
  }
});

// Inicializar ScrollSpy de Bootstrap
if (typeof bootstrap !== 'undefined') {
  new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 70
  });
}
