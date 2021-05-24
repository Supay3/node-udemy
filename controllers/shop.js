const Product = require('../models/Product');

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            products,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
};

exports.getIndex = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}