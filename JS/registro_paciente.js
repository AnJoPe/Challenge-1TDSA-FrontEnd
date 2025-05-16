const etapa_1_imagem = document.getElementById('etapa-1-registro-imagem');
const etapa_2_imagem = document.getElementById('etapa-2-registro-imagem');
const etapa_3_imagem = document.getElementById('etapa-3-registro-imagem');
const etapa_4_imagem = document.getElementById('etapa-4-registro-imagem');
const etapa_5_imagem = document.getElementById('etapa-5-registro-imagem');

window.addEventListener('resize', checkWindowSize)

document.addEventListener('DOMContentLoaded', checkWindowSize)

function checkWindowSize() {
    if (window.screen.width < 768) {
        etapa_1_imagem.src = "./Assets/Guias/Registro/Telefone/etapa_1.png"
        etapa_2_imagem.src = "./Assets/Guias/Registro/Telefone/etapa_2.png"
        etapa_3_imagem.src = "./Assets/Guias/Registro/Telefone/etapa_3.png"
        etapa_4_imagem.src = "./Assets/Guias/Registro/Telefone/etapa_4.png"
        etapa_5_imagem.src = "./Assets/Guias/Registro/Telefone/etapa_5.png"
    } else {
        etapa_1_imagem.src = "./Assets/Guias/Registro/etapa_1.png"
        etapa_2_imagem.src = "./Assets/Guias/Registro/etapa_2.png"
        etapa_3_imagem.src = "./Assets/Guias/Registro/etapa_3.png"
        etapa_4_imagem.src = "./Assets/Guias/Registro/etapa_4.png"
        etapa_5_imagem.src = "./Assets/Guias/Registro/etapa_5.png"
    }
}