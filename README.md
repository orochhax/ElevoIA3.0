<!-- Renomeie "Agência-OS" pelo nome do seu produto, e troque SEU-USUARIO/SEU-REPO pela URL real do GitHub. -->

# 🎯 Agência-OS

**Uma agência de marketing inteira, em skills de IA — do briefing à proposta, do conteúdo ao site.**

> Cada projeto é um time de especialistas de IA que trabalham juntos pra você prestar serviço de marketing pra qualquer empresa. Todos alimentam um **Dossiê** central — a fonte da verdade sobre o cliente — então nada se perde e tudo sai consistente.

---

## ✨ O que é

O Agência-OS é um conjunto de **skills** (especialistas de IA) que rodam dentro do **[Claude Code](https://claude.com/claude-code)**. Cada skill é um membro do time — Entrevistador, Estrategista, Designer, Vendedor... — e todos leem e escrevem num único documento, o **Dossiê** (`dossie.md`), que guarda tudo sobre o cliente. Assim ninguém repergunta o que já foi dito, e cada entrega sai na mesma linha.

Você não precisa ser especialista em marketing: o time te conduz, faz as perguntas certas e produz o trabalho. Você decide e aprova.

> **Regra de ouro:** 1 projeto = 1 cliente. Para cada novo cliente, **duplique a pasta do projeto vazia** e comece do zero.

---

## 👥 O time

**Fluxo principal**

| Skill | O que faz |
|---|---|
| 🎙️ **Entrevistador** | Faz a descoberta: entende a empresa, o que vende, pra quem, o tom e o objetivo. Abre o Dossiê. |
| 🔍 **Analista** | Audita a presença digital (Google, Instagram, site, WhatsApp...) e, depois, mede engajamento e conversão. |
| 🧭 **Estrategista** | Vira o diagnóstico em plano: posicionamento, pilares de conteúdo, linha editorial e calendário. |
| 💼 **Vendedor** | Monta a oferta e a proposta comercial, focado no preço de venda e no valor percebido pelo cliente. |
| ✍️ **Criador** | Escreve copy, legendas e roteiros de Reels/vídeo, na voz da marca. |
| 🎨 **Designer** | Cria o visual: carrosséis, posts, stories e a identidade visual. |
| 💻 **Desenvolvedor** | Gera sites e landing pages que convertem. |
| 📊 **Contador** | Cuida das finanças internas: entradas, saídas, margem e lucro do projeto. |

**Coordenação e apoio**

| Skill | O que faz |
|---|---|
| 🎼 **Maestro** | Orquestra o time: lê o Dossiê, mostra em que pé está o cliente e chama a skill certa na ordem certa. |
| 📁 **Dossiê** | A fonte da verdade. Não produz nada sozinho — é a memória que todo mundo lê e atualiza. |

**Opcionais** (ative se fizerem parte do seu serviço)

| Skill | O que faz |
|---|---|
| 📣 **Gestor de Tráfego** | Planeja campanhas de Meta Ads e Google Ads. |
| 🤝 **Gerente de Contas** | Relatórios pro cliente, relacionamento e retenção pós-venda. |
| ✅ **Revisor** | Porta de qualidade antes de tudo ir pro ar. |

---

## 🔄 Como funciona

```
  Entrevistador → Analista → Estrategista → Vendedor
        → Criador → Designer → Desenvolvedor → Contador

        🎼 Maestro orquestra   ·   📁 Dossiê é a memória
```

O **Maestro** sempre sabe o próximo passo. O **Dossiê** guarda o contexto entre as etapas — você pode parar hoje e continuar amanhã sem perder nada.

---

## 🚀 Começar agora

### Pré-requisitos
- **[Claude Code](https://claude.com/claude-code)** instalado
- **Git**

### 1) Clone e abra o projeto do novo cliente
```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git cliente-novo
cd cliente-novo
claude
```

### 2) Inicie a descoberta
Dentro do Claude Code, digite:
```
/entrevistador
```
> Ou, se preferir, já abra direto na entrevista:
> ```bash
> claude "/entrevistador"
> ```

O **Entrevistador** começa a fazer as perguntas, monta o `dossie.md` e prepara o terreno pro resto do time.

### 3) Siga o fluxo
A qualquer momento, chame o maestro pra saber o que fazer em seguida:
```
/maestro
```
Ele mostra um painel do que já foi feito e qual é o próximo passo.

---

## 📁 Estrutura do projeto

```
.
├── dossie.md            ← a fonte da verdade sobre o cliente (criada na entrevista)
├── conteudo/            ← textos do Criador
├── design/              ← artes e identidade visual do Designer
├── web/                 ← sites e landing pages do Desenvolvedor
├── proposta/            ← propostas do Vendedor
├── financeiro/          ← controle financeiro do Contador
└── .agents/skills/      ← o time de skills (o "motor" da ferramenta)
```

---

## ⚠️ Sobre o financeiro

O **Contador** organiza os números e te dá o panorama (entradas, saídas, margem, lucro), mas **declarações fiscais oficiais precisam de um contador humano**, que assina e responde legalmente. A ferramenta prepara; o profissional valida.

---

## 🛠️ Personalizar

As skills são arquivos de texto em `.agents/skills/<skill>/SKILL.md` — dá pra ler e ajustar o jeito de cada uma trabalhar (tom, perguntas, formatos) sem programar nada.
