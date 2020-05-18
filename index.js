const express = require('express');
const app = express();

const jsonExample = [
    { name : "Nombre 1" },
    { name : "Nombre 2" },
    { name : "Nombre 3" }
];

const htmlExample = "<html>" +
    "<head>" +
        "<title>HTML EXAMPLE TEST</title>" +
    "</head>" +
    "<body>" +
        "<h1>Example H1 title</h1>" +
        "<h2>Example H2 title</h2>" +
        "<h3>Example H3 title</h3>" +
        "<h4>Example H4 title</h4>" +
        "<h5>Example H5 title</h5>" +
        "<p>Example paragraph</p>" +
        "<a href='http://www.google.com.ar'>Example link</a>" +
    "</body>" +
"</html>";

const xmlExample = "<note>" +
    "<to>Tove</to>" +
    "<from>Jani</from>" +
    "<heading>Reminder</heading>" +
    "<body>Don't forget me this weekend!</body>" +
"</note>";

app.get('/', function (req, res) {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(`
        <html>
            <head>
                <title>DAS API EXAMPLE</title>
            </head>
            <body>
                <a href="/json"><button type="button">Ver JSON</button></a>
                <a href="/html"><button type="button">Ver HTML</button></a>
                <a href="/xml"><button type="button">Ver XML</button></a>
            </body>        
        </html>
    `);
});

app.get('/json', function (req, res) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(jsonExample);
});

app.post('/json', function (req, res) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(req.body);
});

app.get('/html', function (req, res) {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(htmlExample);
});

app.get('/xml', function (req, res) {
    res.set('Content-Type', 'text/xml; charset=utf-8');
    res.send(xmlExample);
});

app.listen(3005, function () {
    console.log('API Example for das is up on port :3005');
});
