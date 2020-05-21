require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application 
app.use(bodyParser.urlencoded({ extended: false })) // no se enviara nada mas 

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('get usuario local');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'Nombre requerido'
        });

    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Listening on: ', process.env.PORT);
});