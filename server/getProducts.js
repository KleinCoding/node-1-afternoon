const products = require('../products.json');


const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).json(items);
    }
    res.status(200).json(products)
};


const getProduct = (req, res) => {
    const product = products.filter(product => product.id == +req.params.id)
    const item = products.find(val => val.id === parseInt(req.params.id));
    if (item) {
        return res.status(200).json(product)
    } else {
        res.status(500).json("Item not in list")
    }
}


module.exports = {
    getProducts,
    getProduct
}