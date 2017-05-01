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
O [site oficial][typ01] contém links para alguns editores e seus plugins.
Recomendo fortemente a utilização de algum deles durante esse tutorial.

Vamos organizar nosso projeto da seguinte forma:

```
electrotype/
- img/  # imagens
- css/  # folhas de estilo
- src/  # aqui vai ficar os códigos
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

Abra seu arquivo `main.ts` e digite o seguinte:

```ts
import * as Electron from 'electron'

let janela: Electron.BrowserWindow

function criarJanela() {
	janela = new Electron.BrowserWindow({
		width: 800,
		height: 600
	})
}

Electron.app.on("ready", criarJanela)
```


----
[typ01]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html