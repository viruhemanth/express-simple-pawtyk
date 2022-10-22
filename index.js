const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.use(express.static('static'));

async function testFunc() {
  // const response = await axios.get(`https://tirupatibalaji.ap.gov.in`);
  console.clear();
  console.log('HELLO');
  const response = await axios.get(`https://www.google.com`, {
    timeout: 3000,
  });
  // console.log(response.headers['content-type']);
}

app.get('/', (req, res) => {
  testFunc();
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
