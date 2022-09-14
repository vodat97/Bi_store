const homeRouter = require('./home');
const productsRouter = require('./product');
const crudRouter = require('./crudProduct');
const cartRouter = require('./cart');
const userRouter = require('./user');
const categoryRouter = require('./category');
const originRouter = require('./origin');
// ----------------------------------------------- //
function route(app) {
    app.use('/user', userRouter);
    app.use('/cart', cartRouter);
    app.use('/origin', originRouter);
    app.use('/category', categoryRouter);
    app.use('/products', productsRouter);
    app.use('/crud', crudRouter);
    app.use('/', homeRouter);
}

module.exports = route;