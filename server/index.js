const express = require('express');
const products = require('../products.json');
const app = express();
const port = 4050;
const getProducts = require('./getProducts');
const getProduct = require('./getProducts');


app.get('/api/products', getProducts.getProducts);
app.get('/api/products/:id', getProduct.getProduct);

app.listen(port, () => {console.log(`Server is listening on ${port}`);
});
