---
title: "Porque a sua escolha de ferramentas importa"
description: "Minha visão pessoal sobre como escolher e configurar as ferramentas que você usa (ou devia estar usando)"
cover: "/covers/why-your-choice-of-tools-matter.jpg"
date: 2026-08-16
tags: ["opinião", "dev workflow"]
---

Ultimamente, tenho refletido bastante sobre o porquê de ter escolhido as ferramentas que moldam meu _workflow_ diário. A tendência que vejo hoje em dia é pegar soluções pesadas e "com tudo incluso" (_batteries-included_) para, no fim das contas, acabar usando menos de 10% do que elas realmente oferecem.

Minha visão é simples: suas ferramentas devem se adaptar à forma como você pensa e trabalha, e não forçar _você_ a se moldar a elas. Como desenvolvedores, somos privilegiados por ter acesso a um ecossistema tão vasto de software, e deveríamos aproveitar essa liberdade ao máximo.

## Minha Filosofia sobre Ferramentas de Trabalho Pessoais

Eu vejo minha seleção de ferramentas (seja ela o Neovim, Tmux, OpenCode ou Pi) como uma extensão do meu próprio processo de pensamento/raciocínio. Essas ferramentas existem para servir ao meu ritmo de trabalho (_momentum_), e nunca devem se tornar obstáculos ou "pedras no meu sapato". Assim que uma ferramenta força uma fricção artificial, limita minha capacidade de customizar um comportament ou _workaround_ (aka gambiarra), ou dita como eu deveria trabalhar sem me incluir nessa decisão, ela deixa de ser a ferramenta certa para mim.

Eu vivo por um lema simples:

> Prefiro passar algumas horas depois do trabalho ou no fim de semana aprimorando meus _dotfiles_ do que lidar com lentidões, interrupções ou frustrações com minhas ferramentas enquanto estou trabalhando.

Aqui está como essa filosofia se traduz ao longo da minha stack principal:

- **Maleabilidade importa mais do que convenções pré-definidas**: Ferramentas como Neovim, Tmux e Pi prosperam porque são núcleos mínimos projetados para serem moldados. No Pi, por exemplo, se eu não gosto de como a TUI renderiza, posso reescrever componentes inteiros da interface; se quero ajustar como os _system prompts_ do agente são injetados, posso interceptar os hooks de ciclo de vida (`before_agent_start`). A ferramenta se _rende_ ao desenvolvedor, e não o contrário

- **Fricção como bug**: Quando a mecânica de subagentes e modos do OpenCode começou a criar uma latência desnecessária entre múltiplos _turns_ e a fragmentar o contexto, isso se tornou uma "pedra no meu sapato". Uma abordagem purista não é sobre rejeitar recursos complexos; é sobre eliminar fricções desnecessárias. Substituir modos rígidos de agente por poucas linhas de Regras de Engajamento (Rules of Engagement) no _system prompt_ me deu exatamente a mesma segurança contra "escritas acidentais", mas com zero custo de processamento (_overhead_)

- **Investimento na base**: Ajustar uma configuração em Lua, escrever uma extensão customizada em TypeScript para o Pi, ou refinar os atalhos do multiplexador de terminal não é tempo perdido — é um investimento no seu estado de flow. Resolver uma chateação recorrente de 5 segundos num domingo economiza horas de fadiga mental ao longo de um ano

- **A "Era dos Dotfiles" da IA**: Entramos em uma fase onde os harnesses de IA não deveriam ser tratados como IDEs estáticas e no estilo _black-box_. O _harness_ do seu agente é tão pessoal quanto seu editor de texto ou seu ambiente de terminal. Se uma ferramenta de IA não permite que você ajuste os limites do prompt, inspecione o uso de tokens ou controle a execução de ferramentas, ela carece da flexibilidade necessária para um _workflow_ verdadeiramente otimizado

- **Domínio real através do entendimento**: Assim como um artesão profissional, para otimizar de verdade meu _workflow_ eu preciso dominar minhas ferramentas. Ao mergulhar na documentação de uma ferramenta e entender como ela funciona por baixo dos panos (e por que foi construída daquela forma), eu ganho um nível de controle e previsibilidade que abstrações de _black-box_ simplesmente não conseguem oferecer

Esta filosofia não se limita a projetos pessoais ou a setups totalmente abertos. Mesmo ao trabalhar dentro de limites corporativos ou ambientes restritos, entender a mecânica por trás das suas ferramentas te dá a capacidade de projetar soluções alternativas elegantes e em conformidade, em vez de se ajoelhar perante a fricção do dia a dia.
