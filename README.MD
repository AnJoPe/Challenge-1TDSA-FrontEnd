# Hospital das Clínicas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Feito-brightgreen?style=for-the-badge)
![Responsivo](https://img.shields.io/badge/Responsivo-Sim-brightgreen?style=for-the-badge)

---

## ❓ Objetivo do Projeto

Criar uma plataforma web informativa e interativa para o **Hospital das Clínicas**, com o intuito de facilitar o acesso dos pacientes a informações como agendamentos, exames, prescrições, registro, contato e apresentação institucional. O projeto busca oferecer uma experiência visual agradável, organizada e responsiva.

---

## 📁 Estrutura de Pastas e Arquivos
Hospital_das_Clinicas

```
|-- Assets
|   |-- Fonts
|   |   |-- Inter_28pt-BoldItalic.ttf
|   |   |-- Inter_28pt-Italic.ttf
|   |   |-- Inter_28pt-MediumItalic.ttf
|   |   `-- Inter-VariableFont_opszwght.ttf
|   |-- Guias
|   |   |-- Agendamentos
|   |   |   |-- Telefone
|   |   |   |   `-- etapa_1.png
|   |   |   |-- adendo_1.png
|   |   |   |-- adendo_2.png
|   |   |   |-- etapa_1.png
|   |   |   `-- etapa_2.png
|   |   |-- Exames
|   |   |   |-- Telefone
|   |   |   |   `-- etapa_1.png
|   |   |   |-- adendo_1.png
|   |   |   |-- etapa_1.png
|   |   |   `-- etapa_2.png
|   |   |-- Prescricoes
|   |   |   |-- Telefone
|   |   |   |   `-- etapa_1.png
|   |   |   |-- etapa_1.png
|   |   |   `-- etapa_2.png
|   |   `-- Registro
|   |       |-- Telefone
|   |       |   |-- etapa_1.png
|   |       |   |-- etapa_2.png
|   |       |   |-- etapa_3.png
|   |       |   |-- etapa_4.png
|   |       |   `-- etapa_5.png
|   |       |-- etapa_1.png
|   |       |-- etapa_2.png
|   |       |-- etapa_3.png
|   |       |-- etapa_4.png
|   |       `-- etapa_5.png
|   |-- Icons
|   |   |-- abrir_aba.svg
|   |   |-- agendamentos_icon.svg
|   |   |-- agendamentos_icon_azul.svg
|   |   |-- arrow_back_icon.svg
|   |   |-- contato.svg
|   |   |-- email.svg
|   |   |-- email_branco.svg
|   |   |-- exames_azul_icon.svg
|   |   |-- exames_icon.svg
|   |   |-- faq_icon.svg
|   |   |-- fechar_aba.svg
|   |   |-- github_icon.png
|   |   |-- home_icon.svg
|   |   |-- linkedin_icon.png
|   |   |-- menu_hamburguer_icon.svg
|   |   |-- portal_paciente_azul_icon.svg
|   |   |-- portal_paciente_icon.svg
|   |   |-- prescricoes_azul_icon.svg
|   |   |-- prescricoes_icon.svg
|   |   |-- quem_somos_icon.svg
|   |   `-- seta_direita_icon.svg
|   |-- Integrantes
|   |   |-- andre_rosa.png
|   |   |-- jose_diogo.png
|   |   `-- pedro_miranda.png
|   `-- logo_hc.png
|-- CSS
|   |-- agendamentos
|   |   |-- agendamentos.css
|   |   |-- agendamentos_extra_large.css
|   |   |-- agendamentos_extra_small.css
|   |   |-- agendamentos_large.css
|   |   |-- agendamentos_medium.css
|   |   `-- agendamentos_small.css
|   |-- contato
|   |   |-- contato.css
|   |   |-- contato_extra_large.css
|   |   |-- contato_extra_small.css
|   |   |-- contato_large.css
|   |   |-- contato_medium.css
|   |   `-- contato_small.css
|   |-- exames
|   |   |-- exames.css
|   |   |-- exames_extra_large.css
|   |   |-- exames_extra_small.css
|   |   |-- exames_large.css
|   |   |-- exames_medium.css
|   |   `-- exames_small.css
|   |-- faq
|   |   |-- faq.css
|   |   |-- faq_extra_large.css
|   |   |-- faq_extra_small.css
|   |   |-- faq_large.css
|   |   |-- faq_medium.css
|   |   `-- faq_small.css
|   |-- guias_styles
|   |   |-- guias_styles.css
|   |   |-- guias_styles_extra_large.css
|   |   |-- guias_styles_extra_small.css
|   |   |-- guias_styles_large.css
|   |   |-- guias_styles_medium.css
|   |   `-- guias_styles_small.css
|   |-- index
|   |   |-- index.css
|   |   |-- index_extra_large.css
|   |   |-- index_extra_small.css
|   |   |-- index_large.css
|   |   |-- index_medium.css
|   |   `-- index_small.css
|   |-- prescricoes
|   |   |-- prescricoes.css
|   |   |-- prescricoes_extra_large.css
|   |   |-- prescricoes_extra_small.css
|   |   |-- prescricoes_large.css
|   |   |-- prescricoes_medium.css
|   |   `-- prescricoes_small.css
|   |-- quem_somos
|   |   |-- quem_somos.css
|   |   |-- quem_somos_extra_large.css
|   |   |-- quem_somos_extra_small.css
|   |   |-- quem_somos_large.css
|   |   |-- quem_somos_medium.css
|   |   `-- quem_somos_small.css
|   |-- registro_paciente
|   |   |-- registro_paciente.css
|   |   |-- registro_paciente_extra_large.css
|   |   |-- registro_paciente_extra_small.css
|   |   |-- registro_paciente_large.css
|   |   |-- registro_paciente_medium.css
|   |   `-- registro_paciente_small.css
|   |-- fonts.css
|   |-- global_styles.css
|   |-- global_styles_extra_large.css
|   |-- global_styles_extra_small.css
|   |-- global_styles_large.css
|   |-- global_styles_medium.css
|   `-- global_styles_small.css
|-- JS
|   |-- agendamentos.js
|   |-- contato.js
|   |-- exames.js
|   |-- faq.js
|   |-- navbar_toggle.js
|   |-- prescricoes.js
|   `-- registro_paciente.js
|-- agendamentos.html
|-- contato.html
|-- exames.html
|-- faq.html
|-- index.html
|-- prescricoes.html
|-- quem_somos.html
|-- README.MD
|-- registro_paciente.html
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura das páginas  
- **CSS3** – Estilização com responsividade para diferentes dispositivos  
- **JavaScript** – Funcionalidades interativas  
---

## 👥 Integrantes

- **André Rosa** – Sala: 1TDSA | RM: 563112
- **José Diogo** – Sala: 1TDSA | RM: 562341
- **Pedro Miranda** – Sala: 1TDSA | RM: 562682

---

## 🔗 Repositório no GitHub

📁 Acesse o repositório completo do projeto:  
[https://github.com/AnJoPe/Challenge-1TDSA-FrontEnd](https://github.com/AnJoPe/Challenge-1TDSA-FrontEnd)

---