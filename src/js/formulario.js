const PRECOS = {
  banho: 40,
  tosa: 35,
  teleBusca: 20,
};

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-agendamento');
  if (!form) return;

  mascaraCPF();
  mascaraTelefone();
  dataAgendamento();
  envioFormulario(form);
});

// formata o cpf para
function mascaraCPF() {
  const campo = document.getElementById('cpf');
  if (!campo) return;

  campo.addEventListener('keyup', function () {
    let numeros = campo.value.replace(/\D/g, '').slice(0, 11);
    numeros = numeros.replace(/(\d{3})(\d)/, '$1.$2');
    numeros = numeros.replace(/(\d{3})(\d)/, '$1.$2');
    numeros = numeros.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    campo.value = numeros;
  });
}

// mascara o telefone
function mascaraTelefone() {
  const campo = document.getElementById('telefone');
  if (!campo) return;

  campo.addEventListener('keyup', function () {
    let numeros = campo.value.replace(/\D/g, '').slice(0, 11);
    numeros = numeros.replace(/^(\d{2})(\d)/, '($1) $2');
    numeros = numeros.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
    campo.value = numeros;
  });
}

// valida a data de agendamento
function dataAgendamento() {
  const campoData = document.getElementById('data-agendamento');
  if (!campoData) return;

  // aviso caso o cliente escolha um domingo
  campoData.addEventListener('change', function () {
    const avisoData = document.getElementById('aviso-data');
    const dataEscolhida = new Date(campoData.value);
    const domingo = dataEscolhida.getDay() === 0;

    avisoData.textContent = domingo
      ? 'Não atendemos aos domingos. Por favor, escolha outro dia.'
      : '';
    campoData.setCustomValidity(domingo ? 'Data indisponivel' : '');
  });
}

// simular envio do formulario
function envioFormulario(form) {
  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const peloMenosUmServico = document.querySelector(
      'input[name="servico"]:checked',
    );
    const grupoServicos = document.getElementById('grupo-servicos');
    const avisoServico = document.getElementById('aviso-servico');

    if (!peloMenosUmServico) {
      avisoServico.textContent =
        'Escolha ao menos um serviço (banho e/ou tosa).';
      grupoServicos.classList.add('is-invalid-custom');
    } else {
      avisoServico.textContent = '';
      grupoServicos.classList.remove('is-invalid-custom');
    }

    const formularioValido = form.checkValidity() && peloMenosUmServico;
    if (!formularioValido) {
      form.classList.add('was-validated');
      const primeiroInvalido = form.querySelector(':invalid');
      if (primeiroInvalido) primeiroInvalido.focus();
      return;
    }

    exibirConfirmacao();
    form.reset();
    form.classList.remove('was-validated');
  });
}

function exibirConfirmacao() {
  const nome = document.getElementById('nome-cliente').value;
  const nomePet = document.getElementById('nome-pet').value;
  const confirmacao = document.getElementById('confirmacao-envio');

  confirmacao.textContent =
    'Cadastro recebido, ' +
    nome +
    '! O agendamento para ' +
    nomePet +
    ' foi registrado com sucesso. Em breve entraremos em contato para confirmar.';
  confirmacao.classList.remove('d-none');
  confirmacao.focus();
}
