//validación para Inputs

export function validarInputs(formcontacto__input){

    const tipoDeinput = formcontacto__input.dataset.tipo;
    if(validadores[tipoDeinput]){
        validadores[tipoDeinput](formcontacto__input);
    }

    if(formcontacto__input.validity.valid){
        formcontacto__input.parentElement.classList.remove("input-container--invalid");
        formcontacto__input.parentElement.querySelector(".formcontacto__input__message__error").innerHTML = "";
    }else{
        formcontacto__input.parentElement.classList.add("input-container--invalid");
        formcontacto__input.parentElement.querySelector(".formcontacto__input__message__error").innerHTML = mostrarMensajeDeError(tipoDeinput, formcontacto__input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo Nombre no puede estar vacío.",
        patternMismatch: "El Nombre debe contener 4 caracteres minimo y hasta 50 caracteres maximo!",
    },
    email:{
        valueMissing: "El campo Email no puede estar vacío.",
        typeMismatch: "El Correo no es valido, debe tener el signo (@) seguido del dominio y un punto(.)"
    },
    asunto:{
        valueMissing: "El campo Asunto no puede estar vacío.",
        patternMismatch: "El Asunto debe contener 4 caracteres minimo y hasta 50 caracteres maximo!",
    },
}

const validadores = {
    
};

function mostrarMensajeDeError(tipoDeinput, formcontacto__input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(formcontacto__input.validity[error]) {
            mensaje = mensajesDeError[tipoDeinput][error];
        }
    })
    return mensaje;
}

