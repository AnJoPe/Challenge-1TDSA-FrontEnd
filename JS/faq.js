const botoes_perguntas = document.getElementsByClassName("titulo-pergunta-frequente");
const paragrafos_perguntas = document.getElementsByClassName("paragrafo-pergunta");
const perguntas_frequentes = document.getElementsByClassName("pergunta-frequente");

for (let i = 0; i < botoes_perguntas.length; i++) {
    botoes_perguntas[i].addEventListener("click", () => {
        if (paragrafos_perguntas[i].className.includes('paragrafo-closed')) {
            paragrafos_perguntas[i].style.height = `${paragrafos_perguntas[i].scrollHeight}px`

            perguntas_frequentes[i].className = "pergunta-frequente padding-bottom-aberto";
        } else {
            paragrafos_perguntas[i].style.height = `0px`
            perguntas_frequentes[i].className = "pergunta-frequente";
        }
        paragrafos_perguntas[i].classList.toggle('paragrafo-closed')
    })
}