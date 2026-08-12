# Espaço Veneza - Landing Page

Um projeto de Landing Page de alta conversão desenvolvido para o salão de festas e eventos **Espaço Veneza**, localizado em Águas Lindas de Goiás. O objetivo dessa aplicação é apresentar a estrutura do local, responder a dúvidas frequentes, destacar provas sociais e guiar os clientes para um atendimento direto pelo WhatsApp.

## 🚀 Como acessar o site e rodar o projeto localmente

Siga os passos abaixo para iniciar o ambiente de desenvolvimento na sua máquina e visualizar o site no seu navegador.

### Pré-requisitos
- Ter o [Node.js](https://nodejs.org/pt-br/) instalado no seu computador.
- O terminal deve estar aberto na pasta do projeto (`c:\Users\wende\projects\veneza-event-dream`).

### Instalação e Execução

1. **Instalar as dependências do projeto:**
   Abra o seu terminal na pasta do projeto e execute o comando abaixo (só precisa ser feito a primeira vez):
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   No mesmo terminal, rode o seguinte comando:
   ```bash
   npm run dev
   ```

3. **Acessando o projeto:**
   O terminal informará que o Vite iniciou o projeto (provavelmente no endereço `http://localhost:5173` ou similar). 
   Basta **segurar a tecla Ctrl e clicar no link** (ou copiar e colar o link no seu navegador) para ver a página!

> **Dica**: Sempre que você quiser parar de rodar o projeto, basta ir no terminal e apertar `Ctrl + C`.

## 🌍 Acesso à versão publicada (Live App)
O projeto também já se encontra hospedado e acessível publicamente. Você pode visualizar a aplicação no ar agora mesmo através do link:
👉 **[https://veneza-event-dream.lovable.app](https://veneza-event-dream.lovable.app)**

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com o que há de mais moderno no desenvolvimento web:
- **React.js & Vite**: Base do projeto, focada em performance e rapidez na construção de interfaces de usuário.
- **TanStack Router**: Gerenciamento de rotas fluído e seguro, permitindo navegação instantânea.
- **Tailwind CSS**: Framework para estilização (CSS) que ajudou a criar o visual responsivo, elegante e customizado.
- **Radix UI / shadcn-ui**: Utilizado para criar os componentes interativos do site como botões, FAQ (Accordion), modais, sem perder acessibilidade.
- **Lucide React**: Biblioteca de ícones belos e consistentes.
- **TypeScript**: Trazendo melhor manutenibilidade e segurança via tipagem de dados.

## 📋 Funcionalidades / Estrutura da Página

A Landing Page foi focada em neutralizar objeções (calor, capacitação da equipe) indiretamente com as seguintes seções:
* **Hero Section:** Primeira tela impactante focada no "evento dos sonhos", com chamada forte para WhatsApp.
* **Benefícios e Estrutura:** Destaca o Buffet, a Piscina, a organização e o conforto dos ambientes e banheiros.
* **Depoimentos (Prova Social):** Reforça a qualidade com base nas mais de 69 avaliações 5 estrelas do Google.
* **FAQ:** Acordeões iterativos que tiram dúvidas pré-contratação.
* **Rodapé e Localização:** Endereço (Queda do Descoberto, Águas Lindas) e botões de chamada rápida para interação de fechamento.

## 🤝 Suporte
A aplicação foi gerada usando Lovable e React. Se quiser desenvolver novas seções ou alterar o estilo, a maioria dos componentes fica na pasta `src/components/`, enquanto que a página central da home está em `src/pages/`.
