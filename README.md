# PetShop - Fundamentos de Sistemas Web

Projeto acadêmico da disciplina Fundamentos de Sistemas Web.

Na fase 1, o sistema foi desenvolvido somente com HTML, sem uso de CSS/Bootstrap ou JavaScript.

Na fase 2, o site foi tornado mais atrativo com **CSS/Bootstrap** e **JavaScript**, e recebeu uma nova página de **agendamento**.

## Ajustes realizados na fase 2

- **CSS/Bootstrap**: inclusão do Bootstrap em todas as páginas para deixar o layout responsivo e um **carrossel** de destaques na página inicial (uma seção nova). Foi criada também uma folha de estilos própria (`css/style.css`) com a paleta de cores e tipografia (Poppins + Inter), aplicada por cima do Bootstrap.

- **JavaScript**: criação de `js/script.js` (funções usadas em todas as páginas) e `js/formulario.js` (regras específicas do formulário):
  - selo "Aberto agora" / "Fechado no momento" no cabeçalho, calculado em tempo real a partir do dia da semana e horário de funcionamento;
  - destaque automático da página ativa no menu de navegação;
  - máscaras automáticas de CPF e telefone no formulário;
  - aviso caso o domingo (dia sem atendimento) seja selecionado;
  - validação do formulário (incluindo a regra "marque ao menos um serviço") com mensagem de confirmação exibida após o envio, já que esta atividade não possui backend.

- **Formulário de cadastro do cliente e do pet** (`agendamento.html`): reúne dados do cliente (nome, CPF, telefone, e-mail, endereço e sexo), dados do pet (nome, raça, idade, espécie e porte) e o agendamento do serviço (banho e/ou tosa, tele-busca ou entrega no local, com data e horário).

- **Escolha do serviço e agendamento**: banho e tosa podem ser marcados separadamente (checkboxes), a forma de agendamento é escolhida por botões de opção (tele-busca ou entrega no local) e a data/horário são escolhidos com os seletores nativos de calendário e hora do navegador.

- **Acessibilidade**: além dos atributos `alt` descritivos em todas as imagens (já usados na fase 1), foram adicionados:
  - um link "Pular para o conteúdo principal", visível ao navegar por teclado;
  - `label` associado a todo campo de formulário via `for`/`id`, e `fieldset`/`legend` agrupando os campos de escolha (sexo, espécie, serviço e forma de agendamento);
  - `aria-current="page"` no link do menu correspondente à página atual;
  - `aria-live="polite"` nas regiões que mudam dinamicamente.
  - 

- **Outros ajustes de fase 1 corrigidos**: link do rodapé foi atualizado para incluir a nova página de agendamento; Algumas `div`s adicionados para ajustar o posicionamento do conteúdo.

## Funcionalidades

O site é composto por 4 páginas, todas com header e footer fixos, contendo os mesmos links de navegação para facilitar o acesso em qualquer ponto da página:

### Início (index.html)

Página de apresentação do PetShop, com um breve texto sobre o negócio,links diretos para as três categorias de produtos e para a página de serviços e um carrossel de destaques. Também exibe um resumo visual das categorias de produtos (Acessórios, Rações Não Perecíveis e Higiene e Limpeza), cada uma com um ícone e um link que leva diretamente à respectiva seção na página de Produtos.

### Produtos (produtos.html)

Exibe os produtos do petshop organizados em três categorias:

- **Acessórios**: balanço para pássaros e bolinhas de brinquedo para cães
  e gatos
- **Rações Não Perecíveis**: rações para pássaros, cães e gatos
- **Higiene e Limpeza**: alicate de unhas, shampoo e kit de banho

Cada produto apresenta imagem, descrição e valor. No topo da página há um
menu de categorias que leva, por meio de âncoras internas, diretamente à
seção correspondente.

### Serviços (servicos.html)

Apresenta os dois serviços de banho e tosa oferecidos pelo petshop:

- **Sem tele-busca**: o pet é levado e retirado no petshop
- **Com tele-busca**: o petshop busca e entrega o pet na residência do tutor

Cada serviço apresenta imagem, descrição e valor, além da indicação clara
de tele-busca (sim/não).

### Cadastro e Agendamento (cadastro.html)

Formulário completo de cadastro do cliente e do pet, com escolha do serviço (banho e/ou tosa), forma de agendamento (tele-busca ou entrega no local) e data/horário do atendimento. Mostra uma mensagem de confirmação ao final do envio.

### Navegação

Em todas as páginas, o cabeçalho contém um menu com links para Início, Produtos, Serviços e Agendamento, além de um selo que indica se o petshop está aberto no momento. 
O rodapé repete os links de navegação, traz informações de contato (endereço, telefone e e-mail) e um link "Voltar ao topo".

## Estrutura de arquivos

```
/
├── index.html
├── produtos.html
├── servicos.html
├── cadastro.html
├── README.md
└── src/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── script.js
    │   └── formulario.js
    ├── icones/
    │   ├── acessorios.svg
    │   ├── racao.svg
    │   └── higiene.svg
    └── img/
        ├── balanco-aves.jpg
        ├── bolinha-caes.jpg
        ├── bolinha-gatos.jpg
        ├── racao-aves.jpg
        ├── racao-caes.jpg
        ├── racao-gatos.jpg
        ├── alicate.jpg
        ├── shampoo.jpg
        ├── kit-banho.jpg
        ├── banho-tosa.jpg
        └── tele-busca.jpg
```

## Autor

<table>
  <tr>
    <td align="center">
      <a href="#" title="defina o título do link">
        <img src="https://avatars.githubusercontent.com/u/184702679?v=4" width="100px;" alt="Foto de Roberta no Github"/><br>
        <sub>
          <b>Roberta da Silva</b><br>
        </sub>
      </a>
    </td>
  </tr>
</table>
