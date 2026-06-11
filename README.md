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
| 🎨 **Designer** | Define a identidade visual da marca (paleta, tipografia, estilo) e peças via Canva. |
| 🖼️ **Carrossel** | A skill principal de post pronto: carrosséis, posts e stories renderizados em PNG com a identidade da marca + legenda — pra Instagram, Face, WhatsApp e cia. |
| 💻 **Desenvolvedor** | Gera sites e landing pages que convertem. |
| 📊 **Contador** | Cuida das finanças internas: entradas, saídas, margem e lucro do projeto. |

**Coordenação e apoio**

| Skill | O que faz |
|---|---|
| 🎼 **Maestro** | Orquestra o time: lê o Dossiê, mostra em que pé está o cliente e chama a skill certa na ordem certa. |
| 🗂️ **Gestor de Projetos** | A operação: SOPs, briefings, gestão de entregas (prazos/aprovação) e onboarding de cliente novo. |
| 📁 **Dossiê** | A fonte da verdade. Não produz nada sozinho — é a memória que todo mundo lê e atualiza. |

**Opcionais** (ative se fizerem parte do seu serviço)

| Skill | O que faz |
|---|---|
| 🎯 **Captador** | Ajuda **você** a conquistar novos clientes: prospecção, abordagem e qualificação até o prospect pedir proposta (aí entra o Vendedor). Passo opcional, antes da entrevista. |
| 📧 **E-mail Marketing** | Sequências, campanhas e newsletters (e e-mail frio pro Captador). Produz pronto pra colar na ferramenta de envio. |
| 💬 **Atendimento** | Scripts de WhatsApp/SAC: saudação, FAQ, qualificação, conversão e objeções — pro cliente e pro inbound da agência. |
| 📣 **Gestor de Tráfego** | Planeja campanhas de Meta Ads e Google Ads. |
| 🤝 **Gerente de Contas** | Relatórios pro cliente, relacionamento e retenção pós-venda. |
| ✅ **Revisor** | Porta de qualidade antes de tudo ir pro ar. |

---

## 🔄 Como funciona

```
  (Captador*) → Entrevistador → Analista → Estrategista → Vendedor
        → Criador → Designer → Desenvolvedor → Contador

        🎼 Maestro orquestra   ·   📁 Dossiê é a memória
        * Captador = passo opcional pra conquistar o cliente antes de começar
```

O **Maestro** sempre sabe o próximo passo. O **Dossiê** guarda o contexto entre as etapas — você pode parar hoje e continuar amanhã sem perder nada.

---

## 🚀 Começar agora

### Pré-requisitos
- **[Claude Code](https://claude.com/claude-code)** instalado
- **Git**

### 1) Clone e abra o projeto do novo cliente
```bash
git clone https://github.com/orochhax/ElevoIA3.0.git cliente-novo
cd cliente-novo
rm -rf .git && git init
claude
```
> `cliente-novo` é só o nome da pasta — troque pelo nome do cliente (regra: **1 pasta = 1 cliente**). O `rm -rf .git && git init` limpa o histórico do ElevoIA e inicia um repositório novo e limpo para o cliente. O `cd` entra na pasta porque o `claude` precisa rodar **de dentro** do projeto.
>
> ⚠️ **Privacidade:** o `dossie.md` e as pastas de saída contêm dados do cliente. Não suba esse repositório para um local público; mantenha-o privado ou local.

### 2) Inicie a descoberta (o resto corre sozinho)
Dentro do Claude Code, escreva no chat:
```
entrevistador
```
> Ou, se preferir, já abra direto na entrevista:
> ```bash
> claude "entrevistador"
> ```

O **Entrevistador** faz as perguntas e monta o `dossie.md`. Quando a entrevista fecha, **o time segue sozinho** pelas etapas seguintes — Análise → Estratégia → Proposta → Conteúdo → Design → Site → Financeiro — parando só quando precisa de uma informação sua. Você pode interromper quando quiser.

> 💡 A qualquer momento, escreva `maestro` no chat pra ver um **painel de status**: o que já foi feito e qual é o próximo passo.

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
├── email/               ← e-mails e sequências do E-mail Marketing (criada sob demanda)
├── atendimento/         ← scripts de WhatsApp/SAC do Atendimento (sob demanda)
├── operacao/            ← SOPs, briefings e entregas do Gestor de Projetos (sob demanda)
├── trafego/             ← planos de campanha do Gestor de Tráfego (sob demanda)
├── relatorios/          ← relatórios do Gerente de Contas (sob demanda)
└── .claude/skills/      ← o time de skills (o "motor" da ferramenta)
```

---

## ⚠️ Sobre o financeiro

O **Contador** organiza os números e te dá o panorama (entradas, saídas, margem, lucro), mas **declarações fiscais oficiais precisam de um contador humano**, que assina e responde legalmente. A ferramenta prepara; o profissional valida.
