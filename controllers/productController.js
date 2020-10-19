const Product = require('../models/productModel')

// @desc    Gets all products
// @route   GET api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll()
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(products))
  } catch (error) {
    console.log(error)
  }
}

// @desc    Gets product by id
// @route   GET api/products/:id
async function getProductById(req, res, id) {
  try {
    const product = await Product.findById(id);
    if(!product) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({msg: 'Product not found'}))
    }
    else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(product))
    }
  } catch (error) {
    console.log(error)
  }
}

// @desc    Create product
// @route   POST api/products
async function createProduct(req, res) {
  try{
    const product = {
      title: 'Apple Watch',
      description: 'Apple watch',
      price: 200
    }
    
    const newProduct = await Product.create(product);
    res.writeHead(201, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify(newProduct));

  } catch (error) {
    console.log(error)
  }
}

module.exports = { getProducts, getProductById, createProduct }