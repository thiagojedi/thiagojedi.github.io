---
layout: post
title: "Clean Javascript File Structure"
category: blog
---

## Estrutura proposta

Assim, a seguinte estrutura é proposta:

```
projeto/
├───public/
│   ├───fonts/
│   ├───img/
│   └───styles/
└───src/
    ├───lib/
    │   ├───components/
    │   ├───constants/
    │   ├───helpers/
    │   └───services/
    ├───modules/
    │   ├───application/
    │   ├───catalogue/
    │   └───player/
    └───pages/
```

A seguir uma visão geral de cada um dos diretórios.

#### public/

Os arquivos da pasta `public/` deverão ser arquivos de recursos que podem ter acesso direto pelo
usuário na internet. Por exemplo, imagens e fonts.

#### src/lib/

A pasta `lib/` deverá conter todo e qualquer código que é independente da lógica do nosso produto.
Nela deverão estar `helpers`, o código de acesso às APIs, etc.

Arquivos dentro desse diretório só podem ter dependências de outros arquivos dentro da `lib/`. Como
um código de acesso a APIs pode referenciar um helper de formatação de texto, ou um componente pode
usar outro para fazer uma composição, por exemplo.

Uma boa maneira de ver esse diretório é que tudo o que nele se encontra deve poder ser testado
facilmente com testes unitários.

#### src/modules/

Já a pasta `modules/` deve conter as lógicas de negócio da aplicação. Lógicas tais que não poderão
ser utilizadas em outros projetos por serem inerentes ao projeto atual.

Essa pasta é organizada de acordo com os diferentes aspectos da aplicação. Por exemplo, uma loja
pode ter os módulos `Prateleira` e `Carrinho`, uma aplicação de vídeo pode ter módulos `Catálogo` e
`Player`.

Além disso, recomendo sempre ter um módulo de mais alto nível chamado `Aplicação` ou algo nessas
linhas. Esse módulo deve ser responsável pela comunicação entre os demais módulos. Ele fica
responsável por aspectos globais da aplicação e serve como uma "cola" entre os outros módulos.
Exemplos de coisas que o módulo `Aplicação` gerencia podem ser: [Layouts][google01], Modais, Login,
tratamento de erros globais.

Com exceção do módulo `Aplicação`, todos os módulos deverão ser independentes entre si. Cada módulo
deve definir o que precisa do resto da aplicação e o que ele mesmo pode gerenciar. Os módulos podem
(e devem) utilizar os componentes, helpers, e o que mais precisar da pasta `lib/`, mas nunca o
inverso.

Serão os módulos que deverão prover as páginas que deverão ser renderizadas para o usuário, assim
como a interação do usuário dentro dessa página. Por exemplo, numa aplicação de vídeos, o módulo de
`Catálogo` deve prover a tela de detalhe de filme e a funcionalidade de aquisição desse filme, já o
controle de permissão para a mídia em si deve ser responsabilidade do módulo de `Player`.

E aqui está uma opinião polêmica: reimplemente algo que outro módulo já implementou, ao invés de
referenciar a implementação existente. Se necessário, verifique a possibilidade de colocar a parte
em comum na pasta `lib/` ou no módulo de `Aplicação`.

Essa estrutura e essas limitações são para garantir que cada módulo seja realmente independente e
que uma modificação específica para um módulo não impacte em outro.

#### src/pages/

Por último, o diretório `pages/` deve ser o mais simples de todos da raiz da `src/`. Esse é o
diretório responsável pelo mapeamento entre o navegador e os módulos. Os arquivos de páginas devem
ser capazes de entender qual rota o usuário está acessando e passar para o módulo correspondente
todas a informações necessárias, e renderizar o componente correto.

### Exemplo de fluxo de dados

1. O usuário acessou a página `minhaloja.com.br/produto/123456`;
2. Algum arquivo de `pages/` recebe essa solicitação.
3. Essa rota chama uma API para pegar a informação do produto com o id `123456`;
4. O arquivo da `pages/`, passa essa informação para o componente de "Detalhe de Produto" que é
   disponibilizado pelo módulo de `module/catalogue/`, que é renderizado para o usuário;
5. A partir daí, a interações ficam como responsabilidade do módulo de catálogo (por exemplo,
   calculo de frete).

## Tá, mas e o Redux?

Bom, primeiro que você não precisa do Redux para fazer um app em React. Eu sei, eu sei... É um
choque, não é? Mas o Redux é, de fato, uma ótima ferramenta. Desse modo, vamos ver como gerenciar o
estado da aplicação nessa estrutura.

### Pasta Lib

Sem estado. Próxima pergunta!

Brincadeiras à parte, os componentes presentes na pasta "lib" devem ser independentes da aplicação.
Dessa forma, a renderização desses componentes devem depender apenas dos dados dos props passados a
eles. Não crie componentes de classe aqui, não use o hook `useState`, nem conecte nada ao Redux ou a
Contextos aqui.

### Pasta Modules

Aqui deverá constar o gerenciamento de estado, visto que os componentes dos módulos são responsáveis
por organizar os componentes provenientes da pasta `lib/` na tela.

Cada modulo deverá ser responsável pelo seu próprio estado. E deverá gerenciar esse estado da forma
que achar melhor para o aspecto da aplicação em que é responsável. Por exemplo, se o módulo tiver
páginas com interações simples, os estados deverão ser simples o suficiente para usar apenas estado
local sem problemas.

Se necessário passar props muitos níveis abaixo na árvore de componentes, primeiro deve-se analisar
se a estrutura de componentes está correta.

[google01]: https://developers.google.com/web/fundamentals/architecture/app-shell "App Shell"
