const Product = require('../models/Product');

exports.getAddProduct = (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        productCSS: true,
        formsCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    const products = Product.fetchAll();
    res.render('shop', {
        products,
        pageTitle: 'Shop',
        path: '/',
        activeShop: true,
        productCSS: true
    });
};