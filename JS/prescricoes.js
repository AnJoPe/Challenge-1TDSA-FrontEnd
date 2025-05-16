const etapa_1_imagem = document.getElementById('etapa-1-prescricao-imagem');

window.addEventListener('resize', checkWindowSize)

document.addEventListener('DOMContentLoaded', checkWindowSize)

function checkWindowSize() {
    if (window.screen.width < 768) {
        etapa_1_imagem.src = "./Assets/Guias/Prescricoes/Telefone/etapa_1.png"
    } else {
        etapa_1_imagem.src = "./Assets/Guias/Prescricoes/etapa_1.png"
    }
}