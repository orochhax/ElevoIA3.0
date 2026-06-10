---
name: dossie
description: Gerencia o Dossiê — o documento único e fonte da verdade sobre cada cliente da agência. Use SEMPRE que precisar criar o dossiê de um cliente novo, consultar o que já se sabe sobre um cliente, ver em que etapa o cliente está, ou registrar/atualizar qualquer informação de cliente (identidade, diagnóstico digital, estratégia, proposta comercial, conteúdo, design, site, financeiro, métricas). Toda skill da agência (Entrevistador, Analista, Estrategista, Vendedor, Criador, Designer, Desenvolvedor, Contador, Maestro) deve LER o Dossiê antes de começar e GRAVAR o resultado nele ao terminar — esta skill define o formato, a localização e as regras de atualização. Dispare também quando o usuário falar em "cliente", "onboarding", "ficha do cliente", "cadastrar cliente" ou "o que a gente já sabe sobre o cliente X", mesmo sem citar a palavra "dossiê".
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
---

# O Dossiê

## O que é e por que existe

O Dossiê é o **documento único** que concentra tudo o que a agência sabe e produz sobre um cliente. Ele é a **fonte da verdade**: nenhuma skill do time deve guardar informação de cliente "na cabeça" ou espalhada em arquivos soltos. Antes de qualquer skill agir, ela lê o Dossiê; depois de produzir algo, ela grava no Dossiê.

Por que isso importa: sem uma fonte única, o Estrategista pergunta de novo o que o Entrevistador já descobriu, o Vendedor erra o preço por não ver o diagnóstico, e cada skill devolve algo num tom diferente. O Dossiê elimina retrabalho e garante consistência. É a "cola" que mantém o time coerente.

Esta skill **não produz conteúdo criativo** — ela é a bibliotecária do time. Ela sabe a estrutura canônica, cria dossiês novos, lê o estado atual, e atualiza seções com segurança (sem uma skill apagar o trabalho da outra).

## Onde o Dossiê mora

**Este projeto inteiro é de UM cliente só.** Para cada novo cliente, você duplica o projeto vazio e começa do zero — então não existe pasta por cliente nem identificador. O dossiê fica na raiz, e as saídas de cada skill em pastas ao lado:

```
./
  dossie.md          ← O Dossiê (este documento) — sempre na raiz
  conteudo/          ← saídas do Criador (copies, legendas, roteiros)
  design/            ← saídas do Designer (peças, identidade visual)
  web/               ← saídas do Desenvolvedor (sites, landing pages)
  proposta/          ← saídas do Vendedor (propostas comerciais)
  financeiro/        ← saídas do Contador (planilhas, relatórios)
  email/             ← saídas do E-mail Marketing (criada sob demanda)
  atendimento/       ← scripts do Atendimento (sob demanda)
  operacao/          ← SOPs, briefings e entregas do Gestor de Projetos (sob demanda)
  trafego/           ← planos de campanha do Gestor de Tráfego (sob demanda)
  relatorios/        ← relatórios do Gerente de Contas (sob demanda)
```

Como há um único dossiê, o caminho é sempre `dossie.md` na raiz do projeto — todas as skills sabem onde encontrá-lo sem precisar de identificador.

## A estrutura do Dossiê

O dossiê é Markdown com um **frontmatter** (cabeçalho estruturado entre `---`) que as skills leem com precisão, seguido de **seções de texto**, uma por domínio do time.

O template canônico está em [assets/template-dossie.md](assets/template-dossie.md). **Sempre** crie dossiês novos a partir desse arquivo — não digite a estrutura de memória, pra ela não divergir com o tempo.

O frontmatter tem três partes importantes:

- **Identificação e contato** — quem é o cliente e como falar com ele.
- **`canais`** — os canais que o cliente **já usa** (`usa`) e os que **quer começar** (`quer_usar`). O **Entrevistador** preenche na descoberta; o **Analista** usa isso para saber exatamente o que auditar.
- **`etapas`** — um rastreador de progresso para cada fase do fluxo, com cinco estados: `pendente` | `em_andamento` | `aguardando` | `concluido` | `nao_usado`. É isso que o **Maestro** lê para decidir o próximo passo, e o que o **Analista** lê para auditar o que falta. Os dois estados especiais: **`aguardando`** marca uma etapa travada por um terceiro (ex.: proposta enviada, cliente decidindo) — o Maestro não trava o fluxo nela, pula para a próxima possível e registra o bloqueio; **`nao_usado`** marca uma etapa fora do escopo deste cliente (ex.: fechou sem proposta formal, site não faz parte do pacote) — o Maestro a ignora como se estivesse concluída. A `captacao` já nasce `nao_usado` por padrão (a agência só prospecta este cliente se quiser). A única etapa que **nunca** pode ser `nao_usado` é a `entrevista` — ela é a base de tudo.

As seções do corpo, cada uma "de dono" de uma skill:

| Seção | Skill dona | O que guarda |
|-------|-----------|--------------|
| 0. Captação *(opcional)* | Captador | empresa-alvo, abordagem e status da prospecção — antes de o prospect virar cliente |
| 1. Identidade | Entrevistador | o que é a empresa, o que vende, pra quem, tom de voz, objetivo |
| 2. Diagnóstico digital | Analista | canais atuais, o que existe, o que falta pra estar 100% no digital |
| 3. Estratégia | Estrategista | posicionamento, pilares, linha editorial, calendário |
| 4. Comercial | Vendedor | oferta, escopo, preço de venda, valor percebido, status da proposta |
| 5. Conteúdo | Criador (+ E-mail Marketing) | links/resumo das copies, legendas, roteiros e e-mails produzidos |
| 6. Visual | Designer | identidade visual e peças produzidas |
| 7. Web | Desenvolvedor | sites e landing pages (URLs, status) |
| 8. Financeiro do projeto | Contador | receita, custos, margem e lucro **deste** cliente |
| 9. Métricas | Analista | engajamento e conversão depois que o conteúdo foi pro ar |
| Histórico | todas | log curto de "o que mudou, quando, por quem" |

## Como usar — os três modos

### 1. Criar um dossiê novo

Quando o cliente deste projeto entra (prospecção/onboarding) e ainda não há `dossie.md`:

1. Copie [assets/template-dossie.md](assets/template-dossie.md) para `dossie.md` na raiz.
2. Preencha no frontmatter: `cliente`, `criado_em` e `atualizado_em` (data de hoje), e o que já souber de contato. Deixe `status_geral: prospeccao`, a etapa `captacao` em `nao_usado` (só o Captador muda isso) e as demais `etapas` em `pendente`.
3. Adicione a primeira linha no Histórico: `- [data] Dossiê criado.`

Não invente respostas para as seções — quem preenche cada uma é a skill dona. O dossiê recém-criado é um esqueleto com tudo "a preencher".

### 2. Ler / consultar

Quando alguém quer saber o estado de um cliente, ou uma skill precisa de contexto antes de agir:

1. Leia o `dossie.md` (na raiz) inteiro.
2. Reporte de forma útil: o que já está preenchido, o que está vazio/`pendente`, e em que `etapa` o cliente está.
3. Se outra skill pediu o contexto, devolva só o que ela precisa (ex.: o Vendedor quer Identidade + Diagnóstico + Estratégia para precificar).

Se o dossiê não existir ainda, ofereça criá-lo (modo 1).

### 3. Atualizar uma seção

Esse é o modo mais delicado, porque várias skills escrevem no mesmo arquivo. As regras existem pra ninguém apagar o trabalho do outro:

- **Releia o `dossie.md` imediatamente antes de editar.** Em sessões longas o contexto compacta e a sua "cópia mental" do arquivo pode estar velha — nunca edite a partir do que você lembra; edite a partir do que acabou de ler.
- **Edite só a seção do domínio em questão.** Nunca reescreva o dossiê inteiro. Use edição cirúrgica: troque o conteúdo daquela seção e deixe todo o resto **byte a byte** igual.
- **Atualize `atualizado_em`** no frontmatter para a data de hoje.
- **Atualize a `etapa` correspondente** (ex.: terminou a entrevista → `etapas.entrevista: concluido`; começou a estratégia → `etapas.estrategia: em_andamento`).
- **Atualize `status_geral`** se a fase do cliente mudou (`prospeccao` → `onboarding` → `ativo` → `pausado` → `encerrado`).
- **Acrescente uma linha ao Histórico**: `- [AAAA-MM-DD] <o que mudou> (<skill>)`. Ex.: `- [2026-06-05] Estratégia definida: 4 pilares de conteúdo (Estrategista)`.
- **Preserve o que você não conhece.** Se uma seção tem conteúdo que não é seu, não toque.

## Regras de ouro

- O Dossiê é a verdade. Se uma skill descobre algo novo sobre o cliente, **escreve no Dossiê** — não basta dizer pro usuário.
- Datas sempre no formato `AAAA-MM-DD`.
- Nunca delete histórico. O log conta a evolução do cliente.
- `nao_usado` marca etapa fora do escopo; `aguardando` marca etapa travada por terceiro. Nunca use `nao_usado` na `entrevista`.
- Não remova nem altere `template_versao` manualmente — ele permite migrar dossiês antigos quando o template evoluir.
- Um projeto = um cliente = um `dossie.md` na raiz. Cliente novo = projeto novo, duplicado vazio.
- Se o frontmatter e o corpo discordarem (ex.: etapa "pendente" mas a seção está preenchida), conserte o frontmatter e registre no Histórico.

## Para as outras skills do time

Toda skill da agência deve seguir este contrato:

1. **Antes de agir:** ler `dossie.md` (na raiz) e usar o que já existe (não repergunte o que já está lá).
2. **Depois de produzir:** gravar o resultado na sua seção, atualizar a etapa, bumpar `atualizado_em` e logar no Histórico — seguindo o modo "Atualizar" acima.

Esse handshake é o que faz o time funcionar como um time, e não como skills isoladas.
