const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3500;

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '/scraper.js');
  res.sendFile(filePath, (err) => {
    if (err) console.error(err);
    console.log('Sent', filePath);
  });
});

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
