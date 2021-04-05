/**
 * Get stock name
 * @param ticker
 * @return {[ticker, name, type, region, currency]}
 */
const fetch = require('node-fetch');
const transformQuery = data => {
	if(data.length){
		return data.map( 
			item => {
				return {
					ticker: item["1. symbol"],
					name: item["2. name"],
					type: item["3. type"],
					region: item["4. region"],
					currency: item["8. currency"]
				}
			}
		)
	} else {
		return []
	}
	
}
module.exports = async (req, res) => {
	try {
		const search = req.params.ticker.trim();
		const searchStockTicker = search => {
			let stockSearchUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${process.env.ALPHAAVANTAGE_API_KEY}`;
			return fetch(stockSearchUrl);
		};
		searchStockTicker(search)
			.then(res => res.json())
			.then(data => res.send(transformQuery(data.bestMatches)))
	} catch (error) {
		console.log(`Error getting stock ticker`);
		res.status(404).send(null);
		return;
	}
};