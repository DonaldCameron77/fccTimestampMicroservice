
const express = require('express');

const port = process.env.PORT || 3000;

const formatDate = require('./formatDate.js');

const app = express();

app.get('/api/timestamp/:date_string?', (req, res) => {
  const result = formatDate.formatDate(req.params.date_string);
  res.send(result);
})

app.listen(port, () => console.log(`Timestamp API app listening on port ${port}`));
