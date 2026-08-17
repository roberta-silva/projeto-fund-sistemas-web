# PetShop - Fase 1

Projeto acadêmico da disciplina Fundamentos de Sistemas Web. Nesta fase, o
sistema foi desenvolvido somente com HTML, sem uso de CSS/Bootstrap ou
JavaScript.

## Funcionalidades

O site é composto por 3 páginas, todas com cabeçalho (header) e rodapé
(footer) fixos, contendo os mesmos links de navegação para facilitar o
acesso em qualquer ponto da página:

### Início (index.html)

Página de apresentação do PetShop, com um breve texto sobre o negócio e
links diretos para as três categorias de produtos e para a página de
serviços. Também exibe um resumo visual das categorias de produtos
(Acessórios, Rações Não Perecíveis e Higiene e Limpeza), cada uma com um
ícone e um link que leva diretamente à respectiva seção na página de
Produtos.

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

### Navegação

Em todas as páginas, o cabeçalho contém um menu com links para Início,
Produtos e Serviços. O rodapé repete esses mesmos links, além de trazer
informações de contato (endereço, telefone e e-mail) e um link "Voltar ao
topo" que retorna ao início da página.

## Estrutura de arquivos

```
/
├── index.html
├── produtos.html
├── servicos.html
├── README.md
└── src/
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
