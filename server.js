const http = require('http');
const products = require('./data/products');

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>Hello Vanilla Nodejs</h1>');
  // res.end()
  
  if(req.url === '/api/products') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(products))
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))