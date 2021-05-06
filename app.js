const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="fr"><head><title>My first Page</title></head><body><h1>Hello from my Node.js server</h1></body></html>');
    res.end();
});

server.listen(3000);