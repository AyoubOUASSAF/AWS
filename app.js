const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node.js on AWS EC2!');
});

const PORT = 3000;
const HOST = '0.0.0.0'; // This makes the server accessible externally
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
