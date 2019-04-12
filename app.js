const express = require("express");
const app = express();
const path = require("path");

app.use('/scripts', express.static('scripts'));
app.use('/styles', express.static('styles'));
app.use('/images', express.static('images'));


app.get('/drunkrules', function (request, response) {
    response.sendFile(path.join(__dirname + '/drunkrules.html'))
});

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/drunktogether.html'))
});

app.listen(process.env.PORT || 8080);