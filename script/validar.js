export function validar(input) {
    const tipoDeinput = input.dataset.tipo
    if (input.validity.valid) {
        input.parentElement.classList.remove('formulario__input--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = "";
    } else {
        input.parentElement.classList.add('formulario__input--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML =
            mostarmensajeError(tipoDeinput, input);
    }
}

export function validartxt(textarea) {
    const tipoDeinput = textarea.dataset.tipo
    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove('formulario__textarea--invalid');
        textarea.parentElement.querySelector('.input-message-error').innerHTML = "";
    } else {
        textarea.parentElement.classList.add('formulario__textarea--invalid');
        textarea.parentElement.querySelector('.input-message-error').innerHTML =
            mostarmensajeError(tipoDetxt, textarea);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    " customError"
];

const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo de nombre no puede estar vacio',
        patternMismatch: 'La direccion debe contener entre 3 y 50 caracteres'
    },
    email: {
        valueMissing: 'El Campo de correo no puede estar vacio',
        typemismatch: 'El correo no es valido'
    },
    asunto: {
        valueMissing: 'El campo asunto no puede estar vacio',
        patternMismatch: 'La direccion debe contener entre 3 y 50 caracteres'
    },
    mensaje: {
        valueMissing: 'El campo de mensaje no puede estar vacio',
        patternMismatch: 'El estado debe contener entre 10 y 300 caracteres'
    },
};

function mostarmensajeError(tipoDeinput, input) {
    let mensaj = ""
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaj = mensajesDeError[tipoDeinput][error];
        }
    })


    return mensaj;
}

function mostarmensajeErrortxt(tipoDetxt, textarea) {
    let mensaj = ""
    tipoDeErrores.forEach((error) => {
        if (textarea.validity[error]) {
            mensaj = mensajesDeError[tipoDetxt][error];
        }
    })


    return mensaj;
}

