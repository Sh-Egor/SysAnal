const express = require('express');
const app = express();
const server = require('http').createServer(app);
server.listen(3000);

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/shops', (req, res) => {
    res.sendFile(__dirname + "/shops.html");
});

app.get('/login', (req, res) => {
    if(req.query.lin === "" || req.query.pin === ""){
        res.send(-1);
    }else{
        res.send(req.query);
    }
});

app.get('/in', (req, res) => {
    res.sendFile(__dirname + "/profile.html");
});


app.get('/findUrls', (req, res) => {
    res.send(req.query.id);
});