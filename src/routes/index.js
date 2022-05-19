const homeRouter = require('./home');
const productsRouter = require('./product');
// ----------------------------------------------- //
function route(app) {
    app.use('/products', productsRouter);
    app.use('/', homeRouter);
}

module.exports = route;