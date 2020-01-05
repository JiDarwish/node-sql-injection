const express = require('express');
const db = require('../db');
const router = express.Router();



router.get('/products', (_, res) => {
  res.render('index');
});

router.post('/products', async (req, res) => {
  console.log(req.body)
  const product = req.body['product'];
  // const result = await db.searchForProductSafe(product);
  // const data = JSON.stringify(result);
  // res.render('index', { 'data': data });
  return db.searchForProduct(product)
    .then(result => {
      const data = JSON.stringify(result);
      return res.render('index', { 'data': data });
    })
    .catch(err => {
      console.log(err);
      const error = "There was an error!";
      return res.render('index', {'error': error});
    })
});


module.exports = router;
