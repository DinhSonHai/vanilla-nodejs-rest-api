let products = require('../data/products');
const { v4: uuidv4 } = require('uuid');

const { writeData } = require('../utils');

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    resolve(product);
  })
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = {id: uuidv4(), ...product};
    products.push(newProduct);
    writeData('./data/products.json', products);
    resolve(newProduct);
  })
}

function update(product, id) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = {
      id,
      ...product
    }
    writeData('./data/products.json', products);
    resolve(products[index]);
  })
}

function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter(p => p.id !== id)
    writeData('./data/products.json', products);
    resolve();
  })
}

module.exports = { findAll, findById, create, update, remove }