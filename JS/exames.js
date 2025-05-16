const etapa_1_imagem = document.getElementById('etapa-1-exames-imagem');

window.addEventListener('resize', checkWindowSize)

document.addEventListener('DOMContentLoaded', checkWindowSize)

function checkWindowSize() {
    if (window.screen.width < 768) {
        etapa_1_imagem.src = "./Assets/Guias/Exames/Telefone/etapa_1.png"
    } else {
        etapa_1_imagem.src = "./Assets/Guias/Exames/etapa_1.png"
    }
}