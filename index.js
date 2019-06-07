const express = require('express');
const app = express();
const server = require('http').createServer(app);
server.listen(3000);

const McDonalds = {
    h1: "McDonalds", 
    url1: "mcdonalds/mcdonalds.jpeg", 
    url2: "mcdonalds/mcdonalds.jpeg", 
    url3: "mcdonalds/mcdonalds.jpeg", 
    url4: "mcdonalds/mcdonalds.jpeg", 
    url5: "mcdonalds/mcdonalds.jpeg"
};
const MyBox = {
    h1: "MyBox", 
    url1: "mybox/mybox.jpeg", 
    url2: "mybox/mybox.jpeg", 
    url3: "mybox/mybox.jpeg", 
    url4: "mybox/mybox.jpeg", 
    url5: "mybox/mybox.jpeg"
};

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/shops', (req, res) => {
    res.sendFile(__dirname + "/shops.html");
});

app.get('/template', (req, res) => {
    res.sendFile(__dirname + "/template.html");
});

app.get('/findUrls', (req, res) => {
    res.send(SwitchedObject(req.query.id));
});

function SwitchedObject (name)
{
    switch(name){
        case "MyBox": return MyBox;
        case "McDonalds": return McDonalds;
        default: return 0;
    }
}
