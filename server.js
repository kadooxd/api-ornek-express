const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(80)

var logger = function(req, res, next) {
    var tarih = new Date();
    var formatliTarih = tarih.getDate() + "." + (tarih.getMonth() + 1) + "." + tarih.getFullYear();
    formatliTarih += " " + tarih.getHours() + ":" + tarih.getMinutes();
    console.log(formatliTarih + ': New request.')
    next()
};

app.use(logger);

const randomTextFaces = require('random-text-faces');

app.get('/', (request, response) => {
    response.json({ kado: randomTextFaces.get() })
})