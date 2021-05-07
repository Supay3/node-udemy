const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(express.urlencoded({extended: true}));

app.use(adminRoutes, shopRoutes);

app.use((req, res) => {
    res.status(404).send('<h1>404 Page not found</h1>');
});

app.listen(3000);