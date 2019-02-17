const express = require('express');
const hbs = require ('hbs');
const fs = require ('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log();
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

// app.use((req, res, next)=>{
//    res.render('maintence.hbs');
//});

app.use('/', express.static(__dirname + '/javno'));


hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
} );

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    //res.send('<h1>Zdravo Express!</h1>');
        res.render('home.hbs', {
            pageTitle: 'Naslovna strana sajta',
            welcomeMessage: 'Dobrodošli na našu web prezentaciju',
        });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'O nama',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMesage: 'None existing page'
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});