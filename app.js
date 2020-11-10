const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000


///// this is where I will be sending the JSON payload from tradingview to

// overview of what is happening or what will be happening
// 1. JSON payload posted to web URL
// 2. Web URL recieved JSON and process it
// 3. Web URL sends API request to Alpaca base URL (paper trading URL)
// 4. The API request will execute a buy or sell order

app.post('/buy_stock', (req, res) => {
  console.log('I bought the stock:', req.body);
  res.sendStatus(200)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
