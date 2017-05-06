---
layout: post
title: "ElectroType Reaction: Getting things Done"
category: blog
---

Nesse segundo post de uma série de quatro, vou explicar o ambiente de trabalho para desenvolvermos uma aplicação Electron com Typescript. 
Desde a estutura de pastas até como criar um bom pipeline de desenvolvimento e compilação.

## As primeiras coisas primeiro

Sem muita conversa: vamos por a mão na massa.
Como eu disse no blog anterior, todas as ferramentas que nós vamos usar dependem da linguagem JavaScript, e já que _ainda_ não estamos rodando nada num navegador, precisamos do [Node.js][nod01] instalado com o npm.

Além disso, o TypeScript é muito melhor aproveitado se programado em algum editor que tenha o plugin de autocomplete dele.
O site oficial contém links para alguns [editores e seus plugins][typ02].
Recomendo fortemente a utilização de algum deles durante esse tutorial.

Vamos organizar nosso projeto da seguinte forma:

```
electrotype/
- img/  # imagens
- css/  # folhas de estilo
- src/  # aqui vão ficar os códigos
    - main.ts
    - index.html
- package.json
- tsconfig.json
```

Nada de outro mundo, né? 
Os mais sagazes também devem ter percebido que o arquivo `index.html` está dentro do diretório `src/`, e não em alguma pasta específica para Views.
Você pode criar uma pasta, mas como nesse tutorial desenvolveremos uma SPA e só teremos esse arquivo HTML, não acho necessário.

O arquivo `package.json` vai ficar nesse formato:

```json
{
  "name": "eletrotype",
  "version": "1.0.0",
  "description": "",
  "main": "src/main.js",
  "scripts": {
    "start": "electron .",
    "prestart": "tsc -p ."
  },
  "license": "MIT",
  "devDependencies": {
    "@types/electron": "^1.4.37",
    "@types/node": "^6.0.70",
    "electron": "1.6.6",
    "typescript": "^2.2.2"
  }
}
```

Algumas coisas a serem comentadas sobre esse arquivo:

1-  Perceba que existe na linha `"main": "src/main.js"` estamos indicando que vamos rodar um arquivo `.js` que ainda não existe.
    Não se preocupe pois ele será gerado pelo compilador do TypeScript.

2-  Para garantir que não vamos esquecer de compilar as mudanças feitas nos arquivos `.ts`, a linha `"prestart": "tsc -p ."` faz o npm rodar o compilador antes de iniciar o programa.

3- O Electron não recomenda atualização automática dele mesmo como dependencia, por isso colocamos `"electron": "1.6.6"` e não `"electron": "^1.6.6"`, por exemplo.

4- As dependencias `@types/*` vão ajudar o compilador e o plugin do seu editor a verificar a existência de métodos e campos de objetos existenes nessas bibliotecas.
    
<aside class="alert alert-info">
<strong>Dica:</strong> O arquivo <code>package.json</code> pode ser criado usando o comando <code>npm init</code>. E as dependencias adicionadas via <code>npm install -D electron typescript @types/electron @types/node</code>
</aside>

Enquanto isso, o `tsconfig.json` terá essa configuração:

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",         
        "sourceMap": true,          
        "strictNullChecks": true    
    },
    "includes": [
        "./src/**/*.ts"
    ]
}
```

Acredito que seja uma configuração bem óbvia para quem já conhece um pouco de JavaScript.

Existem duas coisas nesse arquivo que são interessantes: a entrada `includes` e a `strictNullChecks`.

Na primeira, nós dizemos que nós vamos compilar apenas os arquivos `.ts` de dentro da pasta `./src/`.
Não que o compilador vá compilar arquivos `.html` ou algo assim, mas ajuda a otimizar seu funcionamento.

A segunda eu vou falar um pouco mais pra frente.

Demais opções podem ser encontradas na [documentação oficial][typ01] do TypeScript.
A maioria delas vão ajudá-lo a não fazer besteira no seu código.
Mas isso é tema para outro post.

<aside class="alert alert-info">
<strong>Dica:</strong> Um arquivo <code>tsconfig.json</code> básico pode ser criado usando o comando <code>tsc --init</code>.
</aside>

Já podemos rodar o comando `npm install` dentro do nosso diretório para garantir que temos todas as nossas bibliotecas no lugar.

Com isso, já temos tudo pra começar a programar de verdade.

## Olá, Electron!

Vamos criar uma coisinha básica pra mostrar no seu aplicativo Electron.
No seu editor favorito, abra o arquivo `/src/index.html` e crie qualquer coisa que você queira.

No meu, eu vou colocar, dentro da tag `<body>`, o seguinte:

```html
<h1>Olá, Electron</h1>
<div id="corpo">
    Carregado via BrowserWindow
</div>
```

Nada demais, uh?
É só para termos algo para mostrar mesmo.

Agora vamos com calma no código para mostrar essa página.
Abra seu arquivo `main.ts` e digite o seguinte:

```ts
import * as Electron from 'electron'

let janela: Electron.BrowserWindow //Linha A

function criarJanela() { //Linha B
	janela = new Electron.BrowserWindow({
		width: 800,
		height: 600
	})

    janela.loadURL("file://" + __dirname "/index.html")
}

Electron.app.on("ready", criarJanela) //Linha C
```

Esse é o código mínimo para termos uma janela em branco na tela.
Perceba que, como nossa aplicação é bem simples e vai ter apenas uma janela, ela vai ficar como variável global (Linha A), e avisamos pro compilador do TypeScript que essa variável será uma BrowserWindow.
Após declararmos a janela, criamos uma função (Linha B) para instanciarmos ela e chamamos essa função quando a aplicação estiver pronta (Linha C).

Note que nós carregamos o `index.html` do nosso sistema de arquivos, por isso o protocolo `file://`.
Também utilizamos a variável `__dirname`, [setada pelo Node.JS][nod01], para garantir que o caminho é relativo ao local do arquivo que estamos rodando.

Rode o comando `npm start`, você deve ter algo parecido com isso:

![Hello, Electron](/blog/images/electron_1.png) 

E fim! Temos um aplicativo! Quer dizer... quase.

## Evoluindo no Darwin

Lembre-se que o Electron é multiplataforma.
Então existem algumas alterações que precisam ser feitas para o seu aplicativo funcionar bem no [macOS][mac01].

É o comportamento padrão de um aplicativo no macOS que, ao clicar no botão de fechar, o aplicativo não termine.
O aplicativo só pode se terminar se o usuário pedir por isso ativamente.

Dito isso, vamos mudar a função de criar a janela para o seguinte:

```ts
function criarJanela() {
    janela = new Electron.BrowserWindow({
        width: 800,
        height: 600
    })
    
    janela.loadURL("file://" + __dirname + "/index.html")
    
    janela.on("close", function() {
        janela = null
    })
}
```

Vamos tornar a nossa janela nula quando ela for fechada, liberando espaço em memória.
Além disso, no escopo principal, adicionaremos código para dois eventos do nosso `Electron.app`:

```ts
Electron.app.on("window-all-closed", function() {
    if (process.platform !== 'darwin')
        Electron.app.quit()
})

Electron.app.on("activate", function() {
    if (janela === null)
        criarJanela()
})
```

O que fizemos aqui foi dizer pro `app` só sair(quit) após todas as janelas forem fechadas somente se não estivermos no macOS (que usa o kernel "darwin").
Quando não há janelas, mas o aplicativo ainda está rodando, o usuário pode ativar o ícone e uma nova janela será criada e exibida.

Tente rodar novamente o `npm start` para testar esse nosso código.
Você deve ver algo nesse sentido:

``` 
src/main.ts(14,9): error TS2322: Type 'null' is not assignable to type 'BrowserWindow'. 
```

Se lembra que configuramos o compilador com o parâmetro `strictNullChecks: true`?
É exatamente pra isso que ele serve. 
O que aconteceu é que nós tentamos setar a variável `janela` para `null` mas essa variável não pode ser nula.
Isso é bastante útil quando estamos tratando com variáveis globais que podem ser utilizadas em vários locais do código.
É bom que saibamos que esse código pode interferir na nossa lógica.

Como esse arquivo é pequeno, e nós sabemos todos os locais que a `janela` é chamada, vamos apenas mudar a declaração dela para: `let janela: Electron.BrowserWindow | null`. Ou seja, a janela pode ser uma BrowserWindow OU nula.

Eis o código final:

```ts
import * as Electron from 'electron'

let janela: Electron.BrowserWindow | null

function criarJanela() {
    janela = new Electron.BrowserWindow({
        width: 800,
        height: 600,
        
    })

    janela.loadURL("file://" + __dirname + "/index.html")

    janela.on("close", () => {
        janela = null
    })
}

Electron.app.on("ready", criarJanela)

Electron.app.on("window-all-closed", () => {
    if (process.platform !== 'darwin')
        Electron.app.quit()
})

Electron.app.on("activate", () => {
    if (janela === null)
        criarJanela()
})
```

Agora sim. Teminamos por hoje.

Se você utiliza algum editor com plugin do TypeScript, não copie e cole esses códigos, digite-os você mesmo.
Perceba que ao digitar você não só já vê os erros como o da janela nula, como também deve ter sugestões de códigos bem mais sucintas que se você estivesse escrevendo apenas JavaScript.

No próximo post, nós veremos como tornar a nossa página html em uma aplicação usando o ReactJS.
Até lá, veja a [documentação do Electron][ele01] para brincar com os parâmetros do construtor de BrowserWindow (eu gosto muito de `frame: false` e `kiosk: true`)

Que a Força esteja com vocês!


[mac01]: https://en.wikipedia.org/wiki/MacOS#macOS "O nome é macOS agora :D"
[nod01]: https://nodejs.org/docs/latest/api/globals.html#globals_dirname "Documentação sobre o dirname."
[typ01]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html "Documentação do compilador do TS."
[typ02]: https://www.typescriptlang.org/index.html#download-links "Área de downloads do TypeScript"
[ele01]: https://electron.atom.io/docs/api/browser-window/#new-browserwindowoptions "Documentação do BrowserWindow"