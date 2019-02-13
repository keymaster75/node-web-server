const express = require('express');
const hbs = require ('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use('/', express.static(__dirname + '/javno'));

app.get('/', (req, res) => {
    //res.send('<h1>Zdravo Express!</h1>');
        res.render('home.hbs', {
            pageTitle: 'Naslovna strana',
            welcomeMessage: 'Dobrodošli na našu web prezentaciju',
            currentYear: new Date().getFullYear()
        });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'O nama',
        currentYear: new Date().getFullYear()
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