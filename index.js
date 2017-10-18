let ccxt = require('./ccxt')

let exchange = new ccxt.binance({
    apiKey: '',
    secret: '',
    enableRateLimit: true, // built-in rate limiting REST long poller
})

;(async () => { // no need for setInterval with async/await Promise

    while (true) {
        
        // 获取交易币种的信息
        let ticker = await (exchange.fetchTicker('NEO/BTC'))
        
        // 获取挂单信息
        let orderbook = await (exchange.fetchOrderBook('NEO/BTC'));

        let binanceBid = ticker.bid;
        let binanceAsk = ticker.ask;

        console.log(binanceBid)
        console.log(binanceAsk)

        console.log(orderbook.bids[0])
        console.log(orderbook.asks[0])        
    }

}) ()
