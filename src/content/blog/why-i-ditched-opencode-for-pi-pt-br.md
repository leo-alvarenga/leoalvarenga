---
title: "Por que abandonei o OpenCode pelo Pi"
description: "...E como encontrei meu harness de agente ideal"
date: 2026-08-24
tags: ["depoimento", "ia", "agentes de ia", "dev workflow", "pi", "opencode"]
---

Quando comecei a ir além das janelas de chat padrão de IA para explorar _workflows_ locais e baseados em agentes, o OpenCode pareceu um sopro de ar fresco. Ele me mostrou o que era possível quando um LLM tinha acesso direto e estruturado a uma base de código local. Isso me permitiu entender e usar gradualmente Skills, Perfis de Agente, comandos customizados e loops de agente. Com o tempo, à medida que meu _workflow_ diário evoluía, comecei a notar uma fricção sutil: o OpenCode segurava a minha mão um pouco _demais_.

Não me leve a mal, o OpenCode é um ponto de partida fantástico. O isolamento de subagentes, a compactação automática de contexto e o gerenciamento estrito de modos são **muito** bem projetados. Mas, com o tempo, suas opiniões sobre como subagentes deveriam ser criados e como o contexto deveria ser particionado começaram a parecer restritivas. Eu sigo uma filosofia pessoal muito rígida:

Por conta disso, eu não queria uma estrutura rígida me dizendo como meus loops de agentes deveriam operar; eu queria uma tela maleável onde eu tivesse autoridade total sobre o consumo de tokens, prompts do sistema e execução de ferramentas.

Eis que surge o **[Pi](https://pi.dev/)**.

## Estágio 1: Tentando recriar o que eu achava que queria

Quando migrei para o Pi, meu primeiro instinto foi recriar a estrutura familiar à qual eu estava acostumado. Sentia falta da separação rígida do OpenCode entre planejamento e execução, então construí minha própria extensão: [@leo-alvarenga/pi-agent-manager](https://www.npmjs.com/package/@leo-alvarenga/pi-agent-manager).

A extensão me permitia alternar estados de perfil rapidamente. Cheguei até a conectar o hook de evento `before_agent_start` do Pi para injetar dinamicamente instruções de agente etiquetadas diretamente no prompt do sistema antes de cada turno:

```Markdown

<!-- AGENT_PROFILE_START -->

## Perfil de Agente Ativo: PLAN

Você está no MODO PLAN (arquitetura e exploração em modo leitura).
NÃO faça edições diretas no código nem execute comandos de terminal que modifiquem o estado.

<!-- AGENT_PROFILE_END -->
```

Foi um exercício divertido e, tecnicamente, funcionou. Alcancei uma paridade de funcionalidades quase total com a arquitetura de alternância de modos do OpenCode, diretamente dentro do Pi.

...E então percebi que tinha construído uma solução para um problema que eu não tinha mais.

Estágio 2: Percebendo o que eu realmente precisava
À medida que passei mais tempo usando o gerenciador de perfis, as falhas na filosofia de "modos de agente" ficaram evidentes.

Limites rígidos entre modos forçam uma fricção artificial de múltiplos turnos. Para uma refatoração rápida de duas linhas, exigir que um agente entre em um modo de leitura, gere um plano completo, aguarde confirmação, mude para o modo de execução e releia o contexto gera um custo enorme de latência. Pior ainda, separar a exploração da execução muitas vezes fragmenta o contexto, fazendo com que detalhes sutis descobertos durante a inspeção se percam na transição.

Eu não precisava de alternadores de modo complexos ou orquestradores de subagentes. Eu só queria evitar "escritas acidentais" (aquelas interações irritantes em que o agente edita agressivamente um arquivo quando eu só tinha feito uma pergunta exploratória simples).

A solução não era criar modos de agente pesados; era um adendo sucinto de Regras de Engajamento para o Prompt do Sistema (colocado no arquivo ~/.pi/agent/APPEND_SYSTEM.md):

Snippet de código

## Regras de Engajamento

Estas regras estão sempre em vigor e têm prioridade sobre qualquer instrução conflitante no nível do turno.

1. **TRATE MODIFICAÇÕES DE ARQUIVOS COMO DESTRUTIVAS** — Ferramentas de modificação de arquivos como `edit`, `write`, `replace` devem ser tratadas como delicadas e usadas apenas se estritamente necessário (O mesmo vale para `bash` ou outras ferramentas de execução que possam invocar comandos de shell para modificar arquivos).
2. **LEIA ANTES DE ESCREVER** — Nunca invoque `edit`, `write` ou `replace` no seu primeiro turno, a menos que o usuário ordene explicitamente "corrija", "edite", "escreva", "crie" ou similar. Investigação em modo leitura (`read`, `grep`, `find`, `ls` e `bash` não mutável) é sempre permitida e esperada.
3. **PROPONHA PRIMEIRO** — Para perguntas exploratórias ou de arquitetura, descreva as alterações propostas em texto antes de invocar qualquer ferramenta de edição. Aguarde a concordância do usuário antes de escrever nos arquivos.
4. **VERIFIQUE A INTENÇÃO** — Se a consulta for ambígua (ex: "Como o X funciona?"), trate-a como investigação em modo leitura. Se a intenção realmente não puder ser inferida e agir for algo irreversível, peça esclarecimentos antes de prosseguir.
5. **CONFIRME AÇÕES DESTRUTIVAS** — Antes de executar comandos irreversíveis (`rm -rf`, `git reset --hard`, force-push, exclusão de dados ou sobrescrita de arquivos sem backup), declare o que será perdido e confirme, a menos que o usuário tenha solicitado explicitamente.
6. **PREFIRA FERRAMENTAS BASEADAS EM HASH** — Se houver ferramentas baseadas em hash disponíveis (`hash_edit`, `hash_read` e similares), prefira-as ao trabalhar com arquivos para garantir que não ocorra divergência de conteúdo entre leituras ou operações.

Construindo seu próprio Harness "Pelo amor à arte"
Se você é o tipo de desenvolvedor que passa os finais de semana ajustando funções do .bashrc, customizando a barra de status do Neovim ou caçando otimizações para seus dotfiles, criar e customizar seu próprio Harness de Agente de IA é um dos projetos mais satisfatórios que você pode realizar no momento.

Estamos atualmente na "era dos dotfiles" da engenharia de IA. Ferramentas prontas são ótimas para começar, mas moldar seu próprio ambiente (seja construindo molduras de status TUI customizadas, escrevendo ferramentas de edição ancoradas por hash ou criando daemons de proxy localizados) oferece um nível incrível de autonomia sobre seus loops de feedback de desenvolvimento.

Existe algo como um "workflow produtivo perfeitamente otimizado e definitivo"? Não. Você sempre vai refatorar um prompt do sistema, ajustar a borda de uma TUI ou testar uma nova extensão. Mas ajustar o seu próprio harness não é apenas sobre produtividade, é pelo amor à arte.
