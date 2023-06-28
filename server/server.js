const http = require('http');
const fs = require('fs');

const path = 'src/index.html'
const fileContent = fs.readFileSync(path);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(fileContent);
})

server.listen(80, '127.0.0.1', () => {
    console.log("Listening!");
})