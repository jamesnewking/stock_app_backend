module.exports = function(app) {

      app.use('/stocks', require('./stocks.js'));

};