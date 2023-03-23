import { validar } from "./validar.js";
import { validartxt } from "./validar.js";

const inputs = document.querySelectorAll('input');
const textarea = document.querySelectorAll('textarea')
const whatsapp =  document.querySelector('[data-whatsapp]')

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});

textarea.forEach(textarea => {
    textarea.addEventListener('blur', (textarea) => {
        validar(textarea.target);
    });
});

whatsapp.addEventListener('click', (event) => {
    contactar(event.target);
})

function contactar(){
    window.open("https://api.whatsapp.com/send?phone=+50488716380&text=Hola%21%20Quisiera%20chatear%20con%20usted.", "_blank");
}