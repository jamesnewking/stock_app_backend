// v1/users/
const express = require('express');
const StocksController = express.Router();

StocksController.get('/getstockticker/:ticker', require('../controllers/stocks/getStockTicker'));

module.exports = StocksController;