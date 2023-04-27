import { validarInputs } from "./validacion.inputs.js";
import { validarTextArea } from "./validacion.textareas.js";

//inputs
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        validarInputs(input.target);
    });
});

//textareas
const textareas = document.querySelectorAll("textarea");

textareas.forEach(textarea => {
    textarea.addEventListener("blur", (textarea) => {
        validarTextArea(textarea.target);
    });
});
