const express = require('express');
const router = express.Router();
// const nunjucks = require('nunjucks');

function testMiddleware( req, res, next ){
    console.log('첫번째 미들웨어');
    next();
}
function testMiddleware2( req, res, next ){
    console.log('두번째 미들웨어');
    next();
}

router.get('/', testMiddleware, testMiddleware2, (req, res) => {
    res.send('admin 이후 url');

})
router.get('/products', ( _ , res) => {
    // res.send('admin/products');
    res.render('admin/ex-products.html', {
        message : "hello"
    })
})
router.get('/products/write', (req, res) => {
    res.render('admin/ex-write.html');
})
router.post('/products/write', (req, res) => {
    res.send(req.body);
})


module.exports = router;