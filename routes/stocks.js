// v1/users/
const express = require('express');
const StocksController = express.Router();

StocksController.get('/getstockticker/:ticker', require('../controllers/stocks/getStockTicker'));
StocksController.get('/getcompanyoverview/:ticker', require('../controllers/stocks/getCompanyOverview'));

module.exports = StocksController;