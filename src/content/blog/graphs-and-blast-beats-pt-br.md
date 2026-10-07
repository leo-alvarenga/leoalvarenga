---
title: "Gráficos e Blast Beats"
description: "Por que eu construí uma ferramenta nova, por que fico encarando gráficos de resposta em frequência de IEMs, e por que eu queria encarar eles direito"
date: 2026-10-07
tags: ["áudio", "iem", "projeto", "react"]
cover: "/covers/iems.jpg"
tldr: "Eu construí uma ferramenta para ficar encarando Gráficos de Resposta em Frequência e comparar IEMs e fones de ouvido lado a lado: <a href='https://iems.leoalvarenga.dev'>IEM Graph Visualizer</a>"
---

Eu tenho cinco pares de IEMs e um par de fones planares. Para os padrões do hobby audiófilo, isso é modesto. Para qualquer pessoa normal, já é um pouco exagerado.

A culpa é da música.

Muito do que eu escuto é _hostil_ a gear barato. Death metal, slam, goregrind, djent. Bota _Dying Fetus_ ou _Cannibal Corpse_ pra tocar e você tem blast beats bem em cima de uma linha de baixo com afinação drop, os dois brigando pela mesma faixa de 200–500 Hz. Se o driver não acompanha, os bumbos param de ser bumbos e viram uma massa vagamente rítmica. Aí eu mudo pra uma faixa acústica do _Ponto Nulo no Céu_ e quero o oposto: cada ataque de palheta nítido, cada tapa na caixa do violão caindo como uma pequena percussão, as cordas decaindo limpo em vez de sufocar. E _Tool_ ou _Deftones_ querem os dois ao mesmo tempo, na mesma música, com espaço pra respirar no meio.

Nenhum IEM faz tudo isso. Que é como você acaba com um punhado deles.

## O problema do Red Lion

O meu Tangzu Wan'er Red Lion é adorável. Quente, suave, perdoador. _Metallica_ soa muito bem nele. _Dying Fetus_ soa como se tivesse sido gravado dentro de um edredom, e os vocais de Randy Blythe do _Lamb of God_ parecem sair de dentro do contrabaixo.

O TRN Dolphin resolveu isso pra mim. Ainda quente, ainda divertido, mas o baixo é mais controlado e o bumbo volta a ser um instrumento separado. O Salnotes Zero vai longe demais no outro sentido (maravilhoso em picking acústico, um pouco anêmico quando entram as guitarras em Drop A), e o Truthear Gate é a referência que eu uso quando não sei dizer se o problema é o gear ou a masterização da faixa.

O negócio é o seguinte: dá pra ter uma noção boa de tudo isso antes de comprar qualquer coisa. Tudo isso está no gráfico.

## Gráficos, e por que eu queria meu próprio visualizador

Gráficos de resposta em frequência são a coisa mais próxima que esse hobby tem de uma ficha técnica que realmente significa alguma coisa. _Reviewers_ medem IEMs (ou fones) em simuladores de ouvido padronizados (acopladores IEC 60318-4, os rigs estilo 711) e publicam as curvas. A maioria dessas curvas vive no ecossistema do [squig.link](https://squig.link), onde cada revisor roda sua própria ferramenta de gráfico no seu próprio subdomínio.

É um recurso incrível. Mas também é fragmentado. Comparar um IEM medido por um _reviewer_ com outro medido por um _reviewer_ diferente significa malabarismo de abas, e a UI é "construída por nerds de áudio pra nerds de áudio" (com carinho).

Então eu construí o [IEMs Graph Visualizer](https://iems.leoalvarenga.dev). Você escolhe os IEMs ou Headphones de qualquer _reviewer_ do [squig.link](https://squig.link), sobrepõe eles, joga uma curva-alvo atrás, e pronto.

## Como funciona

Não tem backend. Sem scraper, sem banco de dados, sem cron job. É uma aplicação estática Vite + React no GitHub Pages que lê o [squig.link](https://squig.link) diretamente do seu navegador, da mesma forma que as próprias páginas do [squig.link](https://squig.link) fazem.

Essa parte deu um certo trabalho, porque o [squig.link](https://squig.link) não tem uma API documentada. Acontece que não precisa:

1. `squig.link/squigsites.json` lista todos os sites de revisores e os bancos de dados que cada um hospeda.
2. Cada banco de dados tem um `phone_book.json`: marcas, modelos e o nome do arquivo de cada medição.
3. Cada medição é composta por dois arquivos de texto, `<nome> L.txt` e `<nome> R.txt`. Só pares de frequência e SPL, um por linha.
4. O `config.js` de cada site diz em qual frequência e nível aquele revisor normaliza.

Sim, o número 4 é um arquivo JavaScript. Sim, eu leio com regex:

```ts
const db = parseInt(text.match(/default_norm_db\s*=\s*(\d+)/)?.[1] ?? "60");
const hz = parseInt(text.match(/default_norm_hz\s*=\s*(\d+)/)?.[1] ?? "500");
```

Não é elegante. Funciona, e se um site não tiver os valores, cai pro padrão do [squig.link](https://squig.link) (500 Hz a 60 dB).

Normalização é a parte que as pessoas subestimam. Duas curvas medidas em volumes diferentes são inúteis lado a lado; uma simplesmente parece "mais" em tudo. Então cada curva é deslocada até que sua frequência de referência caia no nível de referência, e só depois elas compartilham um gráfico.

Os canais esquerdo e direito são buscados em paralelo. Se os dois chegam, é calculada a média. Se um dá 404 (acontece _muito_ mais do que você imagina), o app usa o que sobreviveu e marca a série como L ou R, pra você saber que está olhando pra um lado do fone e não para o par.

As curvas-alvo foram a única coisa que eu desisti de dar _fetch_: foram inúmeras falhas e erros criativos, sem contar o trabalho que eu tive pra filtrar curvas-alvo duplicadas. No final das contas, eu empacotei 17 delas como arquivos estáticos: Harman IE 2019, as variantes de campo difuso do 5128, o alvo do Crinacle de 2023, o da Etymotic, e alguns outros.

O resto é chato de propósito. React Query faz cache do catálogo e de cada medição, então alternar entre comparações não refaz nenhuma requisição. Toda a comparação (IEMs, alvo, região destacada) vive na URL, então compartilhar é só copiar o link. Tem um exportador de PNG pra quando você quer postar um gráfico em algum lugar. E tem um marcador de região que sombreia uma faixa como mid-bass (80–300 Hz) ou presence (4–6 kHz) e pode dar zoom no gráfico nela — que é, honestamente, a funcionalidade que eu mais uso. A maioria das minhas discussões comigo mesmo acontece entre 80 e 500 Hz.

## O que o gráfico não vai te dizer

Um gráfico de resposta em frequência não mostra "velocidade." As pessoas (eu mesmo, alguns parágrafos atrás) falam sobre drivers rápidos ou lentos, e parte disso é real. Muito disso, eu suspeito, é só o quanto de mid-bass está acumulado e o quanto de treble baixo existe pra definir o ataque. O gráfico te mostra a segunda parte. Ele não consegue te mostrar a primeira.

Também não vai te mostrar o encaixe. Um acoplador não é seu canal auditivo, e as eartips mudam as coisas mais do que a maioria das pessoas quer admitir. Eu uso as Dunu S&S em quase tudo porque elas mantêm o som consistente entre sessões, e essa consistência importa mais pra mim do que qualquer bump de 2 dB num gráfico, fora que são ridiculamente confortáveis (pra mim).

Então use o gráfico pra descartar opções, não pra se apaixonar.

Você pode acessar o app em [iems.leoalvarenga.dev](https://iems.leoalvarenga.dev) e o código está no [GitHub](https://github.com/leo-alvarenga/iem-visualizer). Carregue os IEMs que você já tem, dê zoom em 80–300 Hz e veja se o gráfico concorda com seus ouvidos. Os meus concordam na maioria das vezes. Na maioria.
