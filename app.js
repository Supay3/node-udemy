const path = require('path');

const express = require('express');

const app = express();

const error = require('./controllers/error');

app.set('view engine', 'ejs');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(error.get404Page);

app.listen(3000);