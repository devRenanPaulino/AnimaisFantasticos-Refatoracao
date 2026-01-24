# Animais Fantásticos (Refatoração) 🦁🦉

Este projeto é o resultado de uma refatoração completa, focada em transformar um código legado em uma aplicação moderna utilizando JavaScript ES6+, CSS Grid e Flexbox. O objetivo principal foi aplicar os conceitos de Programação Orientada a Objetos (POO) e modularização para garantir escalabilidade e performance.


  >🎓 Créditos: Projeto desenvolvido durante o curso de JavaScript Completo ES6+ da [Origamid](https://www.origamid.com/), ministrado pelo instrutor [André Rafael](https://github.com/origamid). O desafio proposto aos alunos foi levar a lógica do projeto ao nível máximo de organização e reaproveitamento de código.


[🔗 Acesse o Projeto Final](https://devrenanpaulino.github.io/AnimaisFantasticos-Refatoracao/)

---

# 🚀 Funcionalidades e Implementações Técnicas

### 1. Sistema de Navegação (Slide Framework)

O destaque do projeto é o motor de slide customizado, integrado com suporte total a gestos:

* Suporte Híbrido: Funciona perfeitamente com mouse e eventos de toque (Touch).

* Física de Movimento: Cálculo de aceleração de arraste com fator de 1.6 e limiar de transição (threshold) de 120px.

* Custom Events: O slide comunica sua mudança de estado através de um evento personalizado (changeEvent), permitindo que a paginação se atualize de forma desacoplada.

* Resizing Inteligente: Implementação de debounce no evento de resize para recalcular as coordenadas apenas quando necessário, economizando processamento.

---

### 2. Módulos de Interface (UI)

* Tab Nav & Accordion: Navegação por abas para as descrições dos animais e sistema de perguntas frequentes (FAQ) utilizando listas sanfonadas para melhor aproveitamento de espaço.

* Modal e Tooltip: Componentes de interação acessíveis para login e informações extras em mapas, desenvolvidos sem dependência de bibliotecas externas.

* Menu Mobile: Navegação otimizada para dispositivos móveis com suporte a eventos de clique fora (outsideclick) para fechamento automático.

---

### 3. Animações e Dados (Backend & Performance)

* Anima Números: Implementação de um contador progressivo que detecta o scroll do usuário para iniciar a animação apenas quando os dados estão visíveis na tela.

* Fetch Animais: Consumo de uma API interna (arquivo JSON) para carregar dinamicamente as estatísticas de cada espécie.

* Horário de Funcionamento: Módulo que utiliza a API de tempo do navegador e converte para o fuso horário de Brasília (UTC-3), validando se o estabelecimento está aberto em tempo real.

---

### 🛠️ Tecnologias Utilizadas

* HTML5 Semantic: Estrutura focada em SEO e acessibilidade.

* CSS Custom Properties: Uso de variáveis para facilitar a manutenção de cores e tipografia.

* JavaScript ES6:

  * Classes e Herança.

  * Módulos (Import/Export).

  * fetch API.

  * CustomEvent e Event Listeners.

* Webpack: Empacotador de módulos para otimizar o carregamento dos scripts.

---

### 📂 Arquitetura do Projeto
A estrutura de pastas foi organizada para separar a lógica de negócio da camada de visualização:

```Plaintext
├── js
│   ├── modules (Módulos de lógica pura: Slide, Accordion, TabNav, etc.)
│   ├── script.js (Ponto de entrada que inicializa as classes)
│   └── debounce.js (Utilitário de performance)
├── css
│   ├── slide.css (Estilos específicos do motor de slide)
│   └── style.css (Estilos globais e variáveis)
└── index.html
```

---

### 💡 Aprendizados de Refatoração

* Durante o processo, aplicamos conceitos fundamentais de engenharia de software:

* DRY (Don't Repeat Yourself): Identificamos padrões repetitivos e os transformamos em classes genéricas.

* Single Responsibility Principle: Cada classe no projeto tem uma única função (ex: a classe Slide cuida do movimento, enquanto a SlideNav herda as propriedades e foca na interface).

* Event Binding: Uso rigoroso de .bind(this) para garantir que o contexto das funções de evento sempre aponte para a instância da classe.

---

### 📝 Autor
Renan Paulino - Desenvolvedor Front-end [LinkedIn](https://www.linkedin.com/in/renansilvapaulino/) | [GitHub](https://github.com/devRenanPaulino)
