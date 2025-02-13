# Currículo Online - Jordan Dilenon Zahn Menezes

Este repositório contém o código-fonte do meu currículo online, criado como um projeto de desenvolvimento web para demonstrar minhas habilidades e experiência. O currículo é responsivo, acessível e inclui funcionalidades como tema claro/escuro, download em PDF e link direto para contato via WhatsApp.

## 🚀 Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica do currículo.
*   **CSS3:** Estilização, responsividade e animações.
    *   Variáveis CSS (Custom Properties) para temas e organização.
    *   Flexbox e Grid Layout para layouts responsivos.
    *   Transições e animações CSS para interatividade.
*   **JavaScript (ES6+):** Funcionalidades interativas.
    *   Manipulação do DOM.
    *   Event listeners.
    *   Módulos JavaScript (`import`/`export`) para organização do código.
    *   Geração de link do WhatsApp.
*   **Font Awesome:** Ícones.
*   **Netlify:** Hospedagem e deploy contínuo.
*   **HTML2Canvas e jsPDF (opcional):** Para geração de PDF no lado do cliente (substituído por link de download direto na versão simplificada).
*   **Git e GitHub:** Controle de versão e hospedagem do código-fonte.

## ✨ Funcionalidades

*   **Design Responsivo:** O currículo se adapta a diferentes tamanhos de tela (desktop, tablet, mobile).
*   **Tema Claro/Escuro:** O usuário pode alternar entre um tema claro e um tema escuro.
*   **Download em PDF:** O usuário pode baixar uma versão em PDF do currículo (link direto para um PDF pré-gerado).
*   **Impressão Otimizada:** Estilos CSS específicos para impressão (`@media print`) garantem que o currículo seja impresso de forma limpa e organizada.
*   **Contato via WhatsApp:** Um link direto para iniciar uma conversa no WhatsApp com uma mensagem pré-preenchida.
*   **Navegação por ancora:** Links para navegar entre as seções.
*   **Animações:** Animações aplicadas com rolagem e hover.
*   **Validação de formulário:** Validação dos campos obrigatórios.

## 📂 Estrutura do Projeto


curriculo-online/
├── assets/
│   └── curriculo-jordan-menezes.pdf  # Arquivo PDF do currículo (versão completa)
├── index.html                      # Arquivo HTML principal
├── scripts/
│   ├── main.js                     # Arquivo JavaScript principal
│   ├── modules/
│   │   ├── animations.js           # Módulo para animações
│   │   ├── theme.js                # Módulo para o tema claro/escuro
│   │   └── whatsapp.js             # Módulo para o link do WhatsApp
│   └── (outros módulos, se houver)
├── styles/
│   ├── components/
│   │   ├── contact-form.css        # Estilos do formulário de contato/WhatsApp
│   │   ├── download-buttons.css    # Estilos dos botões de download/impressão
│   │   ├── header.css              # Estilos do cabeçalho
│   │   ├── timeline.css            # Estilos da timeline de experiência
│   ├── main.css                    # Arquivo CSS principal
├── .gitignore                      # Arquivos/pastas a serem ignorados pelo Git
├── netlify.toml                    # Configuração do Netlify
└── README.md                       # Este arquivo


## 🛠️ Como Executar o Projeto Localmente

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/JordanMenezes/cv.git
    cd cv
    ```

2.  **Abra o arquivo `index.html` no seu navegador.**  Não é necessário um servidor web para visualizar o currículo, pois ele é um site estático.

## 🚀 Deploy

O currículo está hospedado no [Netlify/GitHub Pages]. O deploy é contínuo, ou seja, sempre que uma alteração é enviada para o branch `main` do repositório, o site é atualizado automaticamente.

## 📝 Licença

Este projeto está sob a licença [MIT/Apache 2.0/etc.]

## 🤝 Contato

*   **Nome:** Jordan Dilenon Zahn Menezes
*   **Email:** [jordan.dilenon@hotmail.com](mailto:jordan.dilenon@hotmail.com)
*   **LinkedIn:** [linkedin.com/in/jordan-menezes](https://www.linkedin.com/in/jordan-menezes/)
*   **GitHub:** [github.com/JordanMenezes](https://github.com/JordanMenezes/)

---