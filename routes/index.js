const express = require('express');
const router = express.Router();
const { insertCsv2Json } = require('../services')

/* GET home page. */
router.get('/convertCsvToJson', async function(req, res, next) {
  const response = {
    code: 500,
    message: 'Something went wrong, please try later'
  }
  const dataInJSON = await insertCsv2Json(req.query?.fileName);
  if (dataInJSON) {
    response.data = dataInJSON;
    response.code = 200;
    response.message = 'CSV file records uploaded to database successfully'
  }
  res.send(response);
});

router.get('/', function (req, res, next) {
  res.send('Welcome to Kelp\'s API server');
})

module.exports = router;
