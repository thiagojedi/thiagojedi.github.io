---
layout: '../../layouts/BlogPost.astro'
title: 'Context: It f*ckin matters'
category: blog
tags: english
draft: true
---

<!-- TODO: Traduzir para english -->

Apareceu no meu feed um post sobre Vue.js, e uma passagem me chamou a atenção. A passagem mencionava
o "conceito SOLID", e isso me causou certo estranhamento. Vamos falar desse estranhamento.

## Meu contexto

Pra quem não conhece, [Vue.js][vue01] é uma biblioteca de criação de interfaces web bastante focada
em simplicidade.

<!-- Falar sobre o VueJs -->

<!-- Falar sobre o post -->

> Em Vue.js, há 2 maneiras em que você pode estruturar o seu projeto:
>
> 1. Single-File Component: que seria trabalhar com os escopos HTML, CSS e JavaScript em um único
>    arquivo .vue, a qual centralizará todas as responsabilidades pela aparência e comportamento
>
> 2. Fazer split dos arquivos: que seria fazer uma separação de responsabilidade, visando o conceito
>    SOLID.

## _SOLID_ context

<!-- Falar sobre SOLID -->

1. Principles of Object Oriented Design.

2. Design Principles and Design Patterns

## _SRP_ in Web context

Quando se trata de web front-end, as grandes bibliotecas de interface (Vue, React, Angular, Svelte)
têm convergido para uma separação de responsabilidades diferente do que se pensava classicamente. A
ideia de ter a página dividida unicamente em HTML, para conteúdo; CSS, para estilo; e JavaScript,
para lógica, está sendo substituída pelo sistema de componentes.

Um componente é responsável pelo conteúdo, lógica e estilo, mas apenas do que lhe diz respeito.

Por exemplo, um componente "AddToCartButton" mostra um botão, de uma cor (ex. verde), com um texto
(ex. Adicionar) e/ou um ícone específico (ex. 🛒) e chama a função de adicionar ao carrinho quando
for clicado. Sua responsabilidade não é apenas o conteúdo, o estilo ou o comportamento, mas sim o
"Botão" como um todo. Esse botão deve ser consistente ter as mesmas características independente de
onde na página ele é mostrado.

Isso meio que vai de encontro ao que o Uncle Bob propôs. Mas esse tipo de compartimentização promove
as mesmas características: facilidade de manutenção pela diminuição de dependências.

## Context matters

Olha, não to dizendo como que você não deve escrever o seu código. Longe de mim!

Minha opinião é que, como em toda e qualquer ferramenta que você use, você tem que saber **o
porquê** de você estar usando. Não apenas usar porque é um acrônimo bonito que você consegue
pronunciar e lembrar. Vejo muita gente usando cegamente o SRP, o SOLID, ou mesmo o DRY, que esquece
de prestar atenção no mais importante que é o [Monolito Escondido][youtube01].

---

PS: Agradeço ao meu grande amigo [@caiofreitaso](https://github.com/caiofreitaso) pela conversa que
acabou se tornando esse post.

[vue01]: https://vuejs.org/ 'Vue.js: The Progressive JavaScript Framework'
[youtube01]:
  https://www.youtube.com/watch?v=X0tjziAQfNQ
  '10 Tips for failing badly at Microservices by David Schmitz'
