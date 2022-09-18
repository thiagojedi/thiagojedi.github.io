---
title: 'ElectroType Reaction: Basic Stuff'
---

Primeiro de uma série de quatro posts de um tutorial de como usar Electron e React, em conjunto com
TypeScript. Nesse post explico as ferramentas usadas.

<aside class="alert alert-info" lang="en">
<strong>Info:</strong> For any english reader who end up here. 
Sorry but I have no english version for this tutorial. Yet!
I think I'm very proficient in english, but writing a tutorial AND thinking in a second language is a little tiresome.
Until I finish the english version, you may use Google Translator. :grin:
</aside>

## Antes de começarmos

Primeiro eu gostaria de explicar o que me motivou a fazer esse tutorial: um projeto falho. Quer
dizer, um bom projeto, com grande potencial mas que por um motivo ou por outro chegou ao fim.

Um colega me mandou um [postmortem][red01] ministrado na GDC 2017 pela Insomniac Games. Ao invés de
falarem de um jogo específico, eles falaram da experiência que tiveram com o desenvolvimento de
ferramentas internas de desenvolvimento. Os detalhes estão no link para os curiosos, mas basicamente
eles tentaram fazer uma aplicação web, em JavaScript, pra rodar no navegador, e tiveram muitas
dificuldades.

O que me chamou a atenção é que, como um bom postmortem, eles explicaram como eles acham que
poderiam ter dado continuidade a essa ferramenta: utilizar TypeScript; utilizar um navegador
embutido; e estar ciente da cultura de desenvolvimento da sua equipe.

Essa última é bem dependente do contexto da sua organização, seja ela uma grande empresa ou só você.
No máximo eu posso ajudar escrevendo esse tutorial da melhor forma que eu consigo. Então, vou me
focar nos outros pontos.

## Escopo

Visto que todas as ferramentas utilizadas nesse tutorial se baseiam de alguma forma em JavaScript,
assumo que você tenha algum tipo de conhecimento nessa linguagem. Vou apontar links para coisas mais
novas e/ou bibliotecas externas, então não se preocupe muito com isso.

O projeto desenvolvido nesse tutorial é apenas uma base para início ao desenvolvimento com esse
stack. Sinta-se livre para incrementar com qualquer outra ferramenta que você tenha familiaridade.

Vamos lá.

## Electron

Quando você pensa em fazer uma aplicação web você pensa nos passos: Vou desenvolver em uma página,
hospedar em algum lugar e todo mundo vai poder acessar pelo navegador.

Aí você publica o app, e começa a descobrir que a tua página não carrega no Edge ou no Opera, e que
aquela API de notificação não funciona no Firefox no Linux nem no Safari no macOS. Daí vem uma briga
para fazer tudo rodar.

Além disso, uma aplicação web não tem acesso a APIs nativas do sistema do seu cliente. Atalhos no
Iniciar, opção no menu "Abrir com...", integração com a barra de notificações, etc., são alguns
exemplos que são bem difíceis de alcançar. Isso se forem possíveis!

O [Electron][ele01] foi criado pensando nisso.

Em suma ele é o [Chromium][wik01] com o NodeJS para rodar os scripts, ao invés da engine V8 pura.
Pra quem conhece o [Apache Cordova][apa01], pense no Electron como uma versão desktop do Cordova.
Usando Electron, seu web app será na verdade um app híbrido e terá acesso a APIs de acesso a várias
integrações com o sistema operacional no qual ele está rodando. Assim como o Chromium, ele é
multiplataforma, desse modo há a garantia que seu app vai rodar nos principais sistemas operacionais
de desktop. Além disso, por rodar o Node.JS, permite a utilização de (quase) todos os pacotes
disponíveis no NPM sem a necessidade de uma fase de empacotamento.

<aside class="alert alert-info">
<strong>Opa!</strong> Eu falei "sem a necessidade". Ainda sim, esse tipo de ferramenta é muito útil por outros motivos, que eu explicarei nos futuros posts. Ok?
</aside>

Com isso ele acaba sendo uma ótima "cama" onde sua aplicação web pode se deitar e relaxar. Mas pra
isso é preciso ter uma APLICAÇÃO web.

## React

Se você já fez algum aplicativo web, sabe que existem diversas ferramentas para te ajudar a
renderizar os seus dados no HTML final que o navegador vai mostrar ao usuário. Em algumas delas,
você cria um arquivo com uma extensão específica e ele compila para o HTML, normalmente no lado do
servidor, como no caso do Jade/Pug (NodeJS), Razor (C#) e Erb (Ruby). Já em outras, você altera o
HTML e o JavaScript utiliza as marcações para se guiar e reescrever a página com os dados direto no
navegador, como é o caso do AngularJS v1. Por último, você pode esquecer as ferramentas e escrever
os dados em string direto e mandar escrever no HTML.

Entra em cena o [React][fac01].

Criado pela equipe do Facebook, React tem como visão trazer a lógica de renderização de templates
para o código JavaScript, podendo funcionar tanto do lado cliente quanto do lado servidor. Além
disso, conta com um conceito chamado "Virtual DOM" que otimiza a alteração do HTML, de forma que
apenas o que é necessário é (re)escrito na página. Dessa forma, mesmo podendo ser usado para tornar
dinamico apenas uma região da tua página, é uma ótima biblioteca para criar [Single Page
Apps][wik02].

E SPAs são ótimas coisas de se ter dentro do Electron. Nada te impede de ter embarcado um web-app
tradicional, porém leve em consideração que ainda vai existir a necessidade de buscar em disco um
arquivo HTML toda vez que você clicar num link, e esperar ele ser carregado pelo browser interno do
Electron.

Outra coisa que é altamente recomendado pelo React é o uso de arquivos [JSX][fac02]. Nessa extensão
da sintaxe do JavaScript (e**X**tensão **J**ava**S**cript, entendeu? :smiley: ) você pode escrever
tags HTML diretamente no JavaScript e utilizar algum tipo de trans-compilador, normalmente o Babel,
que entenda essa extensão para transformar em um arquivo `.js` normal para o navegador entender.

Por falar nisso.

## TypeScript

Não usaremos o Babel nesse tutorial, mas sim [TypeScript][typ01]. Esse transpiler entende arquivos
`.jsx` e introduz um detalhe que ajuda e muito o desenvolvimento: tipagem em tempo de compilação.

Se lembra daquela aplicação Node que você fez que deve ter umas 5 mil linhas de código? Se lembra
quando você teve que mudar os parâmetros daquela função que era usado em quase toda a aplicação? Não
gostaria que tivesse alguma ferramenta que mostrasse pra você não só todos os cantos onde essa
função é chamada, mas apenas aonde os parâmetros pudessem causar um bug? Pois é. Bem-vindo ao clube.

Com a sintaxe de tipos do TypeScript, o transpiler não só te dá "warnings" durante a compilação para
todos cantos onde objetos mal-estruturados podem causar bugs de tempo de execução, como provê um
serviço de linguagem que se integra muito bem com vários editores e IDEs modernos de forma que você
pode ver esses erros sem nem rodar o executável.

A linguagem foi feita pela Microsoft para projetos grandes, com grande base de código, não para
pequenos projetos de tutorial que você lê na internet. Mas eu tenho certeza que você vai encontrar
algum projeto maior e vai gostar muito se a sua equipe utilizar uma ferramenta como essa. Que tal
praticar com algo menor?

## O Projeto

Tá. Agora vou explicar o que nós vamos fazer nos próximos posts: Uma lista de coisas a fazer, ou
"to-do list". Por que eu escolhi esse projeto? <s>Porque tá na moda.</s> Porque é simples.

Não. Sério. O meu objetivo é guiar você por todos os pequenos detalhes que me deixou coçando a
cabeça para fazer minha aplicação começar a parecer uma aplicação. Após isso, espero que você tenha
capacidade para mudar a aplicação para algo mais complexo.

## O Fim do Começo

E com isso eu termino esse post, não quero me extender muito. Vocês sabem o que vai ser esse
tutorial, porque eu escolhi essas ferramentas e como eu escrevo. Já dá pra ter uma ideia como os
próximos vão ser.

No próximo post devo mostrar como configurar o seu ambiente e nos familiarizaremos com o Electron e
o compilador TypeScript.

Qualquer dúvida ou sugestão, pode deixar nos comentários logo abaixo.

Até a próxima, e que a Força esteja com você.

[apa01]: https://cordova.apache.org/ 'Documentação Oficial do Cordova (em inglês)'
[ele01]: https://electron.atom.io/ 'Página Oficial do Electron (em inglês)'
[fac01]: https://facebook.github.io/react/ 'Documentação Oficial do React (em inglês)'
[fac02]: https://facebook.github.io/jsx/ 'Especificação do JSX para os curiosos (em inglês)'
[red01]:
  https://www.reddit.com/r/programming/comments/5x9j77/insomniacs_web_tools_a_postmortem/
  'Post no Reddit com o link dos slides e uma ótima discussão sobre. (em inglês)'
[typ01]: https://www.typescriptlang.org/ 'Página Oficial do TypeScript (em inglês)'
[wik01]: https://pt.wikipedia.org/wiki/Chromium 'Página da Wikipedia sobre o Chromium'
[wik02]:
  https://en.wikipedia.org/wiki/Single-page_application
  'Página da Wikipedia sobre SPAs (em inglês)'

---

Esse é a primeira tentativa de um tutorial nesse blog. Tenho planejado fazer posts nesse sentido
desde o começo, mas nunca separei tempo nem tive um bom material que me inspirasse a fazer um.
Finalmente tenho.

Obrigado a @guzfskaib por fazer a revisão desse texto.
