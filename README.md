# Stock app backend

## To start

### Install

```
> npm install
> node index.js
```

### Update .env with valid API key
> get API key from <https://www.alphavantage.co/documentation/>

### Get stock ticker

```
http://localhost:5000/stocks/getstockticker/AVGO
```
### returns JSON
```
[{"ticker":"AVGO","name":"Broadcom Inc","type":"Equity","region":"United States","currency":"USD"},
{"ticker":"AVGOP","name":"","type":"Equity","region":"United States","currency":"USD"},
{"ticker":"AVGO34.SAO","name":"Broadcom Inc","type":"Equity","region":"Brazil/Sao Paolo","currency":"BRL"}]
```
