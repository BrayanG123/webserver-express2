const hbs = require('hbs');



//helpers  <-- funcion que se dispara cuando el template lo requiere 
//1er param: nombre del helper, seguido de la funcion
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => { //recibe 1 texto y capitaliza cada palabra
    let palabras = texto.split(' ');
    palabras.forEach( (palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
