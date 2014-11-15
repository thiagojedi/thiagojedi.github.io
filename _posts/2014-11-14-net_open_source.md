---
layout: post
title: .NET virou Open Source. E agora?
date: 14/11/2014
category: blog 
tags: [opensource, opinioes]
---

Finalmente consegui acompanhar, em detalhes, a abertura de código do ambiente .NET pela Microsoft.
Se você ainda não viu, a dois dias atrás a Microsoft começou [a liberar o código fonte do .NET Framework](http://blogs.msdn.com/b/dotnet/archive/2014/11/12/announcing-net-2015-preview-a-new-era-for-net.aspx).
Se você for nesse link, vai ver um monte de novidades técnicas que podem não fazer sentido pra você, então resolvi explicar um pouco essa história toda.

#### Um pouco de história

Basicamente, esse movimento da Microsoft é a continuação de um trabalho que começou há exatamente um ano com a [parceria com a Xamarin](http://blog.xamarin.com/microsoft-and-xamarin-partner-globally/).
A parceria tinha como intuito usar o know-how da Xamarin, especialista em C# para Android e iOS, para portar apps clássicos da MS para esses dispositivos.
Assim surgiram as versões Android e iOS do OneDrive, OneNote, Office, etc.

A Xamarin tem como cabeça o Miguel de Icaza, sempre defensor do código aberto e conhecido por criar os projetos opensource GNOME e Mono.
O Mono foi o maior esforço de se rodar linguagens do .NET, como C# e VB, em sistemas Linux e Mac.

#### Liberação de Código

Durante o último ano, provavelmente devido a pressões da Xamarin e de Icaza, a Microsoft começou a ser mais aberta a comunidade.
No último evento Build, eles soltaram no Github diversos projetos, incluindo o ASP.NET e a próxima versão do compilador de C#, chamado Roslyn.

O que foi divulgado essa semana é que toda o Framework .NET será, no decorrer dos próximos meses, liberado no Github também.
E o melhor de tudo é que a licensa escolhida é a MIT, uma das mais permissivas de todas.
Isto significa que qualquer um pode pegar esse código, ou parte dele, e fazer a sua própria máquina virtual ou versão do C#, sem medo da MS entrar na justiça reclamando.

#### Outras novidades

Além da liberação do código, algumas outras novidades foram divulgadas.
A Microsoft vai utilizar o Github mais comumente, ao invés de desenvolver intermanente e só liberar depois de pronto, por exemplo.
Temos uma nova máquina virtual, novas extensões do Visual Studio, nova API ASP.NET, etc.

Mas, a meu ver, o que mais vai ajudar a comunidade é a criação do [Visual Studio Community 2013](http://www.visualstudio.com/products/visual-studio-community-vs).

Essa versão, que muito se assemelha à versão Pro, está gratuita para qualquer equipe de desenvolvimento de até 5 pessoas.
Agora qualquer estudante, desenvolvedor independente, ou até mesmo pequenas empresas podem utilizar o tão famoso e poderoso ambiente de desenvolvimento da Microsoft sem custo.

#### Resposta do Mono

O Miguel de Icaza, que está trabalhando juntamente com a Microsoft para organizar essa liberação já se pronunciou com relação a postura do projeto Mono sobre isso em [seu blog](http://tirania.org/blog/archive/2014/Nov-12.html).
Em resumo, o Mono vai incorporar todas as novidades a fim de que elas possam ser executadas sem problema na sua maquina virtual e em todas as plataformas que ela rode.

#### Em resumo, o que isso significa?

C# é a minha linguagem de escolha, atualmente.
A maioria dos meus projetos aqui no Github são nessa linguagem, inclusive contribuindo para o Mono.
Comecei a utilizá-la como substituta para Java quando tive problemas em desenvolver para essa última.

Mas o suporte para C# como multiplataforma era complicado devido ao Mono ter que reimplementar todas as bibliotecas da linguagem a fim de que rodem com as ferramentas disponíveis no Linux e Mac.
Não precisa ser programador para saber que ter que reinventar a roda não é divertido.

A liberação do código do .NET trás todas as vantagens de uma comunidade opensource.
Bugs poderão ser corrigidos mais rapidamente, por qualquer um.
Funcionalidades novas poderão ser discutidas com os desenvolvedores que as utilizarão, e esses poderão preparar o seu código para as mudanças que eles agora vão saber que irão acontecer.

Outra vantagem é que vai facilitar novas implementações, pois elas não precisam reescrever trechos existentes no .NET.
O foco vai ser otimizar para o objetivo específico da implementação.
E implementações já existentes, como o Mono, poderão ter cada vez mais funcionalidades que antes só existiam no .NET.
Todo mundo ganha.

E, finalmente, a licensa permissiva vai facilitar também para distribuições Linux não ter mais receios legais de colocar pacotes Mono, ou possíveis pacotes .NET, nos repositórios oficiais (*cof* *Fedora* *cof*).

Como disse meu amigo @caiofreitaso : "Microsoft... Quem te viu, quem te vê".

Até a próxima.