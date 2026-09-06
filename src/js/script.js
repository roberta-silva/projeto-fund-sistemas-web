document.addEventListener('DOMContentLoaded', function () {
  destacarLinkAtivo();
  atualizarStatusFuncionamento();
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

// status de aberto/fechado 
// horario: seg-sex: 09 as 18 - sab 09 as 13
function atualizarStatusFuncionamento() {
  const elemento = document.getElementById('status-funcionamento');
  if (!elemento) return;

  const agora = new Date();
  const diaDaSemana = agora.getDay(); 
  const hora = agora.getHours();

  let aberto = false;
  if (diaDaSemana >= 1 && diaDaSemana <= 5) {
    aberto = hora >= 9 && hora < 18;
  } else if (diaDaSemana === 6) {
    aberto = hora >= 9 && hora < 13;
  }

  elemento.textContent = aberto ? 'Aberto agora' : 'Fechado no momento';
  elemento.classList.toggle('aberto', aberto);
  elemento.classList.toggle('fechado', !aberto);
}
