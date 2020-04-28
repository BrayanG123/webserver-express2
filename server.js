const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000; //para el puerto por defecto y el q nos dara heroku


app.use( express.static( __dirname + '/public' ) );

// Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales' ); //para indicar al hbs (handlebars) donde estaran los parciales (bloques reutilizables?)
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render( 'home', {
        nombre: 'brayan',
        // anio: new Date().getFullYear()
    } );
});

app.get('/about', (req, res) => {

    res.render( 'about', {
        // anio: new Date().getFullYear()
    } );
});

 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});