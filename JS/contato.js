const formulario = document.getElementById('form-email');

const input_nome = document.getElementById('input-form-nome');
const label_nome = document.getElementById('label-form-nome');

const input_email = document.getElementById('input-form-email');
const label_email = document.getElementById('label-form-email');

const input_assunto = document.getElementById('input-form-assunto');
const label_assunto = document.getElementById('label-form-assunto');

const input_corpo = document.getElementById('textarea-formulario-contato');
const label_corpo = document.getElementById('label-form-corpo');


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function resetInput(input) {
    switch (input) {
        case "input-nome":
            input_nome.className = "input-formulario-contato"
            label_nome.className = "label-formulario"
            input_nome.placeholder = "Digite aqui..."
            break;
        
        case "input-email":
            input_email.className = "input-formulario-contato"
            label_email.className = "label-formulario"
            input_email.placeholder = "Digite aqui..."
            break;
        
        case "input-assunto":
            input_assunto.className = "input-formulario-contato"
            label_assunto.className = "label-formulario"
            input_assunto.placeholder = "Digite aqui..."
            break;
        
        case "input-corpo":
            input_corpo.className = "textarea-form-contato"
            label_corpo.className = "label-formulario"
            input_corpo.placeholder = "Digite aqui..."
            break;
    }

    formulario.className = "formulario-wrapper"
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let form_invalido = false;

    if (input_nome.value.replace(/\s+/g, '').length < 3) {
        input_nome.className = "input-formulario-contato input-formulario-invalido"
        label_nome.className = "label-formulario label-form-invalida"
        input_nome.placeholder = "Nome inválido, mínimo de 3 caracteres!"
        formulario.className = "formulario-wrapper form-invalido"

        form_invalido = true;
    }
    if (!validarEmail(input_email.value)) {
        input_email.className = "input-formulario-contato input-formulario-invalido"
        label_email.className = "label-formulario label-form-invalida"
        input_email.placeholder = "Email inválido!"
        formulario.className = "formulario-wrapper form-invalido"

        form_invalido = true;
    }
    if (input_assunto.value.length < 3) {
        input_assunto.className = "input-formulario-contato input-formulario-invalido"
        label_assunto.className = "label-formulario label-form-invalida"
        input_assunto.placeholder = "Assunto inválido, mínimo de 3 caracteres!"
        formulario.className = "formulario-wrapper form-invalido"

        form_invalido = true;
    }
    if (input_corpo.value.length < 3) {
        input_corpo.className = "textarea-form-contato input-formulario-invalido"
        label_corpo.className = "label-formulario label-form-invalida"   
        input_corpo.placeholder = "Corpo inválido, mínimo de 3 caracteres!"
        formulario.className = "formulario-wrapper form-invalido"

        form_invalido = true;
    }
    if (form_invalido) {
        return;
    }

    const emails = 'pedrohm2709@gmail.com,andrerosacolombo18@gmail.com,pessoa3@example.com';
    const assunto = `Email de ${input_nome.value}: ${input_assunto.value}`;
    const corpo = input_corpo.value;
    const enviar_email = `mailto:${emails}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    window.open(enviar_email);
})