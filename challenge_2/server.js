const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/bitcoin', (req, res) => {
  const { start, end, currency, isApiRequest  } = req.query;

  if (isApiRequest === 'true') {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
    .then(response => {
      const { bpi } = response.data;
      const dates = Object.keys(bpi);
      const prices = dates.map(date => bpi[date]);
      res.status(200);
      res.send({ dates, prices });
    })
    .catch(error => {
      console.error(error)
    });
  } else {
    // send data from cache
    res.status(404).send('No cached data available');
  }
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));