//animaciones al scrollear --->
//Skills, Hobbies, Academic
const skillsAll = document.getElementById("skills__all");
const hobbiesAll = document.getElementById("hobbies__all");
const academicAll = document.getElementById("academic__all");
// Experiences
const experience1 = document.getElementById("expereince__img_proyecto1");
const experienceInfo1 = document.getElementById("experience__info1");
/*En construcción - formaciones--------------->
const experience2 = document.getElementById("expereince__img_proyecto2");
const experienceInfo2 = document.getElementById("experience__info2");
const experience3 = document.getElementById("expereince__img_proyecto3");
const experienceInfo3 = document.getElementById("experience__info3");
const experience4 = document.getElementById("expereince__img_proyecto4");
const experienceInfo4 = document.getElementById("experience__info4");
*/



const cargarImagen = (entradas, observador) =>{
    
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible");
            
        } else{
            //entrada.target.classList.remove("visible");
            
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0

});

observador.observe(skillsAll);
observador.observe(hobbiesAll);
observador.observe(academicAll);
observador.observe(experience1);
observador.observe(experienceInfo1);
/*En construcción - formaciones--------------->
observador.observe(experience2);
observador.observe(experienceInfo2);
observador.observe(experience3);
observador.observe(experienceInfo3);
observador.observe(experience4);
observador.observe(experienceInfo4);
*/

