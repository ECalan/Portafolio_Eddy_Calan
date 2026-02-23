//validación para Textareas

export function validarTextArea(formcontacto__textarea){

    const tipoDeinput = formcontacto__textarea.dataset.tipo;
    if(validadores[tipoDeinput]){
        validadores[tipoDeinput](formcontacto__textarea);
    }

    if(formcontacto__textarea.validity.valid){
        formcontacto__textarea.parentElement.classList.remove("textarea-container--invalid");
        formcontacto__textarea.parentElement.querySelector(".formcontacto__textarea__message__error").innerHTML = "";
    }else{
        formcontacto__textarea.parentElement.classList.add("textarea-container--invalid");
        formcontacto__textarea.parentElement.querySelector(".formcontacto__textarea__message__error").innerHTML = mostrarMensajeDeError(tipoDeinput, formcontacto__textarea);
    }
};

const tipoDeErrores = [
    "valueMissing"
];

const mensajesDeError = {
    mensaje:{
        valueMissing: "El campo Mensaje no puede estar vacío!",
    },
}

const validadores = {
   
};

function mostrarMensajeDeError(tipoDeinput, formcontacto__textarea){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(formcontacto__textarea.validity[error]) {
            mensaje = mensajesDeError[tipoDeinput][error];
        }
    })
    return mensaje;
}

const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("textarea__contador");

mensaje.addEventListener("input", function(cantidadCaracteres){
    const target = cantidadCaracteres.target;
    const longitudMax = target.getAttribute("maxlength");
    const longitudAct = target.value.length;
    contador.innerHTML = `Caracteres utilizados: ${longitudAct}/${longitudMax}`;

    if(longitudAct >= 1){
        document.querySelector(".textarea__mensaje__caracteres").style.display = "block";
    }

    if(longitudAct == longitudMax){
        document.querySelector(".textarea__mensaje__caracteres").style.display = "block";
        contador.innerHTML = `Usted a llegado al limite de caracteres disponibles: ${longitudAct}/${longitudMax}`;
    }
});