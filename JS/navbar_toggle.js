const navbar_esquerda = document.getElementById('navbar-esquerda-selector');
const lista_links_menu = document.getElementById('lista-links-menu-selector');
const close_menu = document.getElementById('close-menu-selector');
const estrutura_pagina_menu = document.getElementById('estrutura-pagina-menu-selector');

let mostrando_navbar = true;

function navbar_toggle() {
    if (mostrando_navbar == true) {
        mostrando_navbar = false;

        navbar_esquerda.className = "navbar-esquerda navbar-esquerda-escondida"
        lista_links_menu.className = "lista-links-menu lista-links-menu-escondida"
        close_menu.className = "close-menu close-menu-fechada"
        estrutura_pagina_menu.className = "estrutura-pagina-menu estrutura-pagina-menu-expandida"
    } else {
        mostrando_navbar = true;

        navbar_esquerda.className = "navbar-esquerda"
        lista_links_menu.className = "lista-links-menu"
        close_menu.className = "close-menu"
        estrutura_pagina_menu.className = "estrutura-pagina-menu"
    }
}