const http = require('http');
const { getProducts, getProductById, createProduct, updateProduct, deleteProductById } = require('./controllers/productController')

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>Hello Vanilla Nodejs</h1>');
  // res.end()

  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  }
  else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
    const id = req.url.split('/')[3];
    getProductById(req, res, id);
  }
  else if (req.url === '/api/products' && req.method === 'POST'){
    createProduct(req, res);
  }
  else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT') {
    const id = req.url.split('/')[3];
    updateProduct(req, res, id);
  }
  else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3];
    deleteProductById(req, res, id);
  }
  else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ msg: 'Route not found'}));
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))