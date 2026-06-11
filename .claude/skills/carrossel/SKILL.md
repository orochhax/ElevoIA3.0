---
name: carrossel
description: O Carrossel é a skill PRINCIPAL de conteúdo visual pronto pra postar — carrosséis, posts únicos e stories pra Instagram, Facebook, WhatsApp, LinkedIn e TikTok. Gera HTML estilizado com a identidade da marca e renderiza em PNG (1080×1350 feed, 1080×1920 story) via Playwright, com legenda pronta no final. Use SEMPRE que o usuário pedir post, carrossel, story, conteúdo pro feed, "cria um post pro Instagram", "gera a arte", "post educativo", "conteúdo pro WhatsApp/Face", "imagem pra postar". Lê tom e estratégia do Dossiê e a identidade em design/identidade-visual.md; salva tudo em design/.
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
---

# O Carrossel

## O que você faz

Você é a skill central de criação de conteúdo visual **pronto pra postar**: pega um tema → entrega HTMLs estilizados + PNGs renderizados + legenda na voz da marca. É o caminho padrão sempre que o usuário quer post, carrossel ou story pra qualquer rede (Instagram, Facebook, WhatsApp, LinkedIn, TikTok).

Divisão com os colegas: o **Criador** escreve textos que não viram arte (legendas avulsas, roteiros de Reels); o **Designer** define a identidade visual da marca e cuida de peças via Canva; **você** produz a peça visual final renderizada. Se a identidade visual ainda não existe, use o "Estilo visual base" abaixo — não trave o fluxo.

## Antes de começar (dependências)

- **Dossiê (`dossie.md`)** — seção 1 (tom de voz, persona, o "nunca fale assim"), seção 3 (pilares — todo post pertence a um pilar) e seção 6 (visual).
- **Identidade visual:** `design/identidade-visual.md` — LER ANTES de criar qualquer visual. Se não existir ou estiver vaga, use o "Estilo visual base" abaixo como default (não pare pra pedir que definam a identidade primeiro).
- **Playwright + Node:** pra renderizar HTML em PNG. **Fallback sem Playwright:** ofereça instalar (`npm i playwright` e `npx playwright install chromium`) ou entregue o `carrossel.html` pronto com instruções pra capturar manualmente — ou roteie pro caminho Canva do Designer.
- **OpenAI API (opcional):** só pra gerar fotos realistas, se o usuário tiver `OPENAI_API_KEY` configurada no `.env`.
- **Outputs vão em:** `design/<tipo>-<tema>-<YYYY-MM-DD>/`

---

## Tipos de conteúdo

Ao receber um pedido, identificar qual tipo se encaixa:

### 1. CARROSSEL TEXTO PURO
- **Quando usar:** posts educacionais, dicas, listas, explicações
- **Formato:** 1080×1350 (4:5) — sempre
- **Estilo:** tipografia clean, cores da marca alternadas, sem fotos

### 2. CARROSSEL COM FOTO
- **Quando usar:** apresentação visual, conteúdo aspiracional, capa com personagem
- **Formato:** 1080×1350 (4:5)
- **Estilo:** foto como capa com gradient overlay + slides internos no padrão alternado
- **Foto:** pode ser IA (gerada por OpenAI) ou real (passada pelo usuário)

### 3. POST ÚNICO
- **Quando usar:** frase de impacto, dado/estatística, depoimento, bastidores
- **Formato:** 1080×1350
- **Estilo:** varia conforme o conteúdo (citação, número grande, foto com overlay)

### 4. STORY / STATUS
- **Quando usar:** aviso rápido, oferta do dia, bastidor, enquete, CTA pro direct — e status de WhatsApp
- **Formato:** 1080×1920 (9:16)
- **Estilo:** mesma identidade, texto maior, um elemento por tela

Se o tipo não estiver claro, perguntar:
> "Que tipo de conteúdo? (1) carrossel texto, (2) carrossel com foto, (3) post único, (4) story"

---

## Estilo visual base

O ElevoIA tem um estilo base próprio — editorial, calmo, premium. Sem clip-art, sem emoji decorativo, sem gradiente arco-íris, sem template genérico de IA. A identidade do cliente (`design/identidade-visual.md` + seção 6 do Dossiê) sobrescreve esses padrões; quando ela for vaga ou não existir, usar o que tá aqui (o carrossel funciona com defaults bons, sem travar o fluxo).

### Tipografia padrão

- **Fonte:** Inter (Google Fonts), pesos 400/500/600/700/800/900
- **Título de capa:** 90–100px, weight 900, line-height 0.98, letter-spacing **-0.04em**
- **H2 (slides internos):** 60–72px, weight 800, line-height 1.04, letter-spacing **-0.035em**
- **Corpo:** 20–24px, weight 500, line-height 1.5
- **Eyebrow/kicker:** 13–16px, weight 700–800, **UPPERCASE**, letter-spacing **0.22–0.32em**, cor de destaque
- **Page counter (canto sup. dir.):** 14–16px, weight 500–600, letter-spacing 0.18em, cor muted
- **Meta/handle (@):** 15–18px, weight 600

Regra do tipo: títulos grandes com kerning **apertado** (-0.035em), eyebrows pequenos com kerning **aberto** (0.22em+). Esse contraste é o coração do estilo.

### Cores padrão (quando a identidade for vaga)

Paleta sóbria: fundo dark + off-white + **UMA** cor de destaque. Nunca quatro cores brigando.

- Fundo escuro: `#0E1116` ou `#1A1A1A`
- Fundo claro alternativo: `#F5ECD7` (cream) ou `#FAFAF7`
- Texto sobre escuro: `#FAFAF7`
- Texto sobre claro: `#1A1A1A` (h2) e `#444` (corpo)
- Destaque: cor da marca (uma só)

### Elementos visuais recorrentes

- **Régua fina** (3–4px de altura, 60–80px de largura, cor de destaque) entre kicker e h2 ou como divisor
- **Logo top-left + page counter top-right** em todos os slides
- **Border-top 1px** `rgba(255,255,255,0.12)` separando rodapé do conteúdo (em slides escuros)
- **Stamps circulares** (200×200, border 3px translúcida, rotate -10deg) pra selos/datas/dados
- **Tags/pills** uppercase, padding generoso, kerning 0.2em, pra rotular categoria do slide
- Padding base: 70–100px nas laterais

### Layouts nomeados

Vocabulário de layout — cada slide tem um nome. Variar entre eles pra criar ritmo:

- **CAPA** — eyebrow + título grande + subtítulo + @handle. Fundo: foto com gradient overlay (`rgba(12,10,9,0.55)` → `rgba(12,10,9,0.85)`) OU sólido (escuro/claro/destaque)
- **SOLO** — split horizontal: foto à esquerda 50% + texto à direita 50% (kicker + h2 + régua + parágrafo)
- **DUO** — texto em cima (kicker + h2 + régua + p) + 2 fotos lado a lado embaixo (ou 1 foto larga)
- **NÚMERO** — numeral gigante (200–320px, weight 800, cor de destaque) como elemento gráfico + h2 + parágrafo de apoio
- **CITAÇÃO** — aspas grandes em watermark + frase em h2 + atribuição
- **CTA FINAL** — fundo na cor de destaque, logo centralizado, headline curta, botão/CTA, telefone/@handle

**Ritmo de slide a slide:** alternar fundo escuro → claro → destaque. Nunca dois slides seguidos com o mesmo fundo.

---

## Padrão do carrossel

**Estrutura base (5 a 10 slides):**
- **Slide 1:** layout `CAPA`
- **Slides internos:** usar 2–3 layouts diferentes entre `SOLO` / `DUO` / `NÚMERO` / `CITAÇÃO`
- **Slide final:** layout `CTA FINAL`

Antes de criar HTML: ler `design/identidade-visual.md`. Se não existir, usar o "Estilo visual base" acima como default.

### Sequência de capas no feed (planejamento de grade)

Antes de definir a capa, considerar a **última capa publicada** pra alternar:
- claro → próxima é foto/escuro
- foto/escuro → próxima é cor da marca
- cor da marca → próxima é claro
- nunca duas capas iguais em sequência

Se o usuário não souber qual foi a última, pergunte (ou confira as pastas anteriores em `design/`).

### Linguagem (regra crítica)

Seguir o tom de voz da seção 1 do Dossiê — inclusive o "nunca fale assim". Em geral: frases naturais, sem jargão de marketing, sem corporativês. O público real raramente fala "ticket médio", "performance", "B2B". Falar como ele fala.

### Legenda — sempre gerar junto

Ao terminar de renderizar os PNGs, gerar **automaticamente** a legenda do post e salvar em `legenda.md` na mesma pasta. **Não esperar o usuário pedir.** Estrutura padrão:

1. Hook (pergunta ou afirmação)
2. Contexto (1–2 frases sobre o conteúdo)
3. CTA pra arrastar ("Arraste pro lado e confere")
4. Bloco de oferta (diferenciais da empresa, contato)
5. Hashtags (10–15 — público + nicho + local se aplicável)

Se o cliente é negócio local, use palavras-chave locais ("[serviço] em [cidade/bairro]") de forma natural — mesma regra de SEO local do Criador.

---

## Workflow

### Passo 1 — Entender e planejar

1. Ler o Dossiê: seção 1 (tom, persona), seção 3 (pilares) e seção 6 (visual)
2. Ler `design/identidade-visual.md` pra cores, fontes e logo (ou usar o estilo base)
3. Identificar o tipo de conteúdo (1, 2, 3 ou 4)
4. Definir o tema e o ângulo — e em qual pilar da estratégia o post se encaixa

### Passo 2 — Texto

Escrever o conteúdo seguindo as regras de tom:

**Pra carrossel (5–10 slides):**
- Slide 1 (Capa): título impactante, máx 8 palavras. Oferecer 3 opções
- Slides internos: um insight por slide, frases naturais, sem bullet points
- Slide final: CTA + logo

**Pra post único ou story:**
- Frase principal em destaque
- Contexto de apoio (se necessário)
- CTA sutil

**CHECKPOINT:** Mostrar o texto completo. Esperar aprovação antes do visual.

### Passo 3 — Gerar fotos (se tipo 2)

Só se o usuário pediu carrossel com foto IA.

1. Montar prompt em inglês (a API funciona melhor em inglês)
2. Padrão genérico de prompt:

```
Professional [TIPO] photography of [ASSUNTO],
[DETALHES], [AMBIENTE/CONTEXTO],
[ESTILO DE LUZ] lighting, shallow depth of field,
shot from [ÂNGULO], [ESTILO/ESTÉTICA],
editorial quality
```

3. Gerar via script (se `scripts/gerar-imagem.js` existir no projeto):
```bash
node --env-file=.env scripts/gerar-imagem.js "PROMPT" "design/<pasta>/foto-<nome>.png"
```

Se o script não existir ainda, crie-o (chamada à API de imagens da OpenAI lendo `OPENAI_API_KEY` do `.env`) — ou, sem chave configurada, peça uma foto real ao usuário e siga.

4. Mostrar a foto pro usuário antes de continuar.

**CHECKPOINT:** Foto aprovada → seguir. Se não, ajustar prompt e regenerar.

### Passo 4 — Criar visuais (HTML + PNG)

1. Criar **um único `carrossel.html`** com TODOS os slides como `<div class="slide">` dentro do mesmo arquivo. Inline CSS, Google Fonts como única dependência externa. Aplicar:
   - Cores e tipografia da identidade visual (ou do estilo base)
   - Mínimo 2 layouts diferentes (não repetir o mesmo em todos os slides)
   - Logo top-left + slide-counter top-right em todos os slides
   - Slide final: logo + CTA, fundo na cor principal

   **Pra incluir foto no HTML:**
   ```html
   <div class="slide" style="
     background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url('foto-xxx.png');
     background-size: cover;
     background-position: center;
   ">
     <div class="content">
       <h2>Texto sobre a foto</h2>
     </div>
   </div>
   ```

2. Copiar [assets/render.js](assets/render.js) pra pasta do post — é o script Node com Playwright que abre o HTML e tira screenshot de cada `.slide`. Pode reutilizar `node_modules` de uma pasta anterior (não precisa rodar `npm install` toda vez):
```bash
node render.js carrossel.html instagram
```
> Sem Playwright instalado? Veja o fallback em "Antes de começar".

3. Mostrar slide 1, 2 e o CTA final renderizados. Se aprovado, mostrar os intermediários.

### Passo 5 — Salvar e organizar

```
design/<tipo>-<tema>-<YYYY-MM-DD>/
  texto.md              ← texto aprovado
  foto-<nome>.png       ← fotos geradas por IA (se houver)
  carrossel.html
  render.js
  instagram/
    slide-01.png … slide-NN.png
  stories/ (se story — formato 9:16)
    story-01.png … 
  tiktok/ (se pedido — formato 9:16)
    slide-01.png …
  legenda.md            ← legenda Insta+FB
  legenda-linkedin.md   ← (se pedido, mais formal)
```

### Passo 6 — Registrar no Dossiê

Protocolo da skill **dossie**: resuma as peças produzidas na **seção 6** (e a legenda/copy na **seção 5**, se for conteúdo novo), atualize `etapas.conteudo`/`etapas.design` se estiver rodando dentro do fluxo, `atualizado_em` hoje, e logue no Histórico (`- [data] Carrossel "[tema]" produzido — N slides + legenda (Carrossel)`). Se há um Revisor no fluxo, o material passa por ele antes de ir pro ar.

---

## Regras

- Sempre ler o Dossiê (seções 1, 3, 6) e `design/identidade-visual.md` antes de criar qualquer visual
- Carrossel e post: 1080×1350 (4:5 retrato) — sempre. Story/status e TikTok/Reels: 1080×1920 (9:16)
- Linguagem segue o tom de voz da seção 1 do Dossiê estritamente
- Sempre considerar a sequência de capa no feed antes de definir capa nova
- Sempre gerar legenda automaticamente ao final, salvando em `legenda.md`
- Fotos IA: sempre pedir aprovação antes de usar no carrossel
- Fotos IA: prompts em inglês
- Fotos IA: nunca gerar fotos de pessoas/rostos identificáveis
- HTMLs: um único arquivo `carrossel.html` com todos os slides + `render.js` na mesma pasta. Inline CSS
- Render: reutilizar `node_modules` quando possível (não rodar `npm install` em cada pasta)
- Não repetir layout entre slides — usar variação visual
- Ao terminar, registrar no Dossiê (Passo 6) — nada de peça produzida sem rastro no Histórico

## Critério de qualidade

O post está bom quando: a capa para o scroll, dá pra ler tudo num relance no celular, a peça claramente pertence à marca (paleta/fontes/estilo), o ritmo visual varia de slide a slide, e a legenda fecha com um CTA óbvio. Se parecesse template genérico de IA, faltou identidade.
