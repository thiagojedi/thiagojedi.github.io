---
layout: post
title: "ElectroType Reaction: Basic Stuff"
category: blog
---

Primeiro de uma série de quatro posts de um tutorial de como usar Electron e React, em conjunto com TypeScript.
Nesse post explico as ferramentas usadas.

## Antes de começar

Primeiro eu gostaria de explicar o que me motivou a fazer esse tutorial: um projeto falho.
Quer dizer, um bom projeto, com grande potencial mas que por um motivo ou por outro chegou ao fim.

Um colega me mandou um [postmortem][red01] ministrado na GDC 2017 pela Insomniac Games. 
Ao invés de falarem de um jogo específico, eles falaram da experiência que tiveram com o desenvolvimento de ferramentas internas de desenvolvimento.
Os detalhes estão no link para os curiosos, mas basicamente eles tentaram fazer uma aplicação web, em JavaScript, pra rodar no navegador, e tiveram muitas dificuldades.

O que me chamou a atenção é que, como um bom postmortem, eles explicaram como eles acham que poderiam ter dado continuidade a essa ferramenta: utilizar TypeScript; utilizar um navegador embutido; e estar ciente da cultura de desenvolvimento da sua equipe.

Essa última é bem dependente do contexto da sua organização, seja ela uma grande empresa ou só você. No máximo eu posso ajudar escrevendo esse tutorial da melhor forma que eu consigo. 
Então, vou me focar nos outros pontos.

## Escopo

Visto que todas as ferramentas utilizadas nesse tutorial se baseam de alguma forma em JavaScript, assumo que você tenha algum tipo de conhecimento nessa linguagem. 
Vou apontar links para coisas mais novas e/ou bibliotecas externas, então não se preocupe muito com isso.

O projeto desenvolvido nesse tutorial é apenas uma base para início ao desenvolvimento com esse stack. Sinta-se livre para incrementar com qualquer outra ferramenta que você tenha familiaridade.

Vamos lá.

## Electron

Quando você pensa em fazer uma aplicação web você pensa nos passos: Vou desenvolver em uma página, hospedar em algum lugar e todo mundo vai poder acessar pelo navegador.

Aí você publica o app, e começa a descobrir que a tua página não carrega no Edge ou no Opera, e que aquela API de notifição não funciona no Firefox no Linux nem no Safari no macOS.
Daí vem uma briga para fazer tudo rodar.

Além disso, uma aplicação web não tem acesso a APIs nativas do sistema do seu cliente.
Atalhos no Iniciar, opção no menu "Abrir com...", integração com a barra de notificações, etc., são alguns exemplos que são bem difíceis de alcançar. Isso se forem possíveis!

O [Electron][ele01] foi criado pensando nisso. 

Em suma ele é o [Chromium][wik01] com o NodeJS para rodar os scripts, ao invés da engine V8 pura.
Pra quem conhece o [Apache Cordova][apa01], pense no Electron como uma versão desktop do Cordova.
Usando Electron, seu web app será na verdade um app híbrido e terá acesso a APIs de acesso a várias integrações com o sistema operacional no qual ele está rodando.
Multiplataforma, há a garantia que seu app vai rodar nos principais sistemas operacionais de desktop.
Além disso, por rodar o Node.JS, permite a utilização de (quase) todos os pacotes disponíveis no NPM sem a necessidade de uma fase de empacotamento.

<aside class="alert alert-info">
<strong>Opa!</strong> Eu falei "sem a necessidade". Ainda sim, esse tipo de ferramenta é muito útil por outros motivos, que eu explicarei nos futuros posts. Ok?
</aside>

Com isso ele acaba sendo uma ótima "cama" onde sua aplicação web pode se deitar e relaxar.
Mas pra isso é preciso ter uma APLICAÇÃO web.

## React

Entra em cena o [React][fac01].

## TypeScript

## O Projeto

## O Fim do Começo


[apa01]: https://cordova.apache.org/ "Documentação Oficial do Cordova (em inglês)"
[ele01]: https://electron.atom.io/ "Página Oficial do Electron (em inglês)"
[fac01]: https://facebook.github.io/react/ "Documentação Oficial do React (em inglês)"
[red01]: https://www.reddit.com/r/programming/comments/5x9j77/insomniacs_web_tools_a_postmortem/ "Post no Reddit com o link dos slides e uma ótima discussão sobre. (em inglês)"
[wik01]: https://pt.wikipedia.org/wiki/Chromium "Página da Wikipedia sobre o Chromium"

-----
Esse é a primeira tentativa de um tutorial nesse blog.
Tenho planejado fazer posts nesse sentido desde o começo, mas nunca separei tempo nem tive um bom material que me inspirasse a fazer um.
Finalmente tenho.

Obrigado a @guzfskaib por fazer a revisão desse texto.