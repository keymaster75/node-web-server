const express = require('express');

var app = express();

app.use(express.static('/javno'));

app.get('/', (req, res) => {
    //res.send('<h1>Zdravo Express!</h1>');
    res.send({
        name: 'Sale',
        likes: [
            'Music',
            'Art',
            'Cars'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page se nalazi ovde.');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMesage: 'None existing page'
    });
});

app.listen(3000);