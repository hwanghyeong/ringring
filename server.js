const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const customers = [
    {
      'userName': 'guddjs',
      'pw': 'dksk11',
      'address': 'jukjeon',
      'detail': '11292'
    },
    {
      'userName': 'dami',
      'pw': 'pwpwpwp',
      'address': 'gumidong',
      'detail': '12-22'
    },
    {
      'userName': 'hyeon',
      'pw': 'jiral',
      'address': 'seocho',
      'detail': '5005'
    }
  ]

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.listen(port, () => console.log(`LISTENING on port ${port}`));