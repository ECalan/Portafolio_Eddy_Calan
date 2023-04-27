
const formulario = document.querySelector("[data-form]");
    
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    const asunto = document.querySelector("[data-asunto]").value;
    const mensaje = document.querySelector("[data-mensaje]").value;

    const target1 = nombre.length;
    const target2 = email.length;
    const target3 = asunto.length;
    const target4 = mensaje.length;
    
    if(target1 >= 1 && target2 >= 1 && target3 >= 1 && target4 >= 1){
        window.location.href ="/screens/form.success.html"
    }
});


