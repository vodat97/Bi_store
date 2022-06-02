const homeRouter = require('./home');
const productsRouter = require('./product');
const crudRouter = require('./crudProduct');
const cartRouter = require('./cart');
// ----------------------------------------------- //
function route(app) {
    app.use('/cart', cartRouter);
    app.use('/products', productsRouter);
    app.use('/crud', crudRouter);
    app.use('/', homeRouter);
}

module.exports = route;