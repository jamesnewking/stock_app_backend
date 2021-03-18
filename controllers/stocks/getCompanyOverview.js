/**
 * Get stock name
 * @param ticker
 * @return {[Symbol, AssetType, Name, RTCSessionDescription, Exchange, Currency, CountQueuingStrategy, Sector, Industry, PerformanceNavigation, DividendYield, 52WeekHigh, 52WeekLow...]}
 */
const fetch = require('node-fetch');
module.exports = async (req, res) => {
	try {
		const ticker = req.params.ticker.trim();
		const getStockOverview = ticker => {
			let companyOverviewUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${process.env.ALPHAAVANTAGE_API_KEY}`;
			return fetch(companyOverviewUrl);
		};
		getStockOverview(ticker)
			.then(res => res.json())
			.then(data => res.send(data))
	} catch (error) {
		console.log(`Error getting stock overview`);
		res.status(404).send(null);
		return;
	}
};