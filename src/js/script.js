document.addEventListener('DOMContentLoaded', function () {
  destacarLinkAtivo();
});

function destacarLinkAtivo() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('#header .nav-link');

  links.forEach(function (link) {
    const destino = link.getAttribute('href').replace('./', '');
    if (destino === paginaAtual) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}
