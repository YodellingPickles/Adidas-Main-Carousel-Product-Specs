const express = require('express');
const path = require('path');
const model = require('../database/model.js')
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/shoes', (req, res) => {
  model.getDefaultSet((err, data) => {
    console.log(data)
    if (err) {
      console.log(err)
    } else (
      res.send(data)
    )
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
