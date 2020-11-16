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
    if (err) {
      console.log(err)
    } else {
      const allColors = data.reduce((acc, value) => {
        if (!acc[value.color]) {
          return Object.assign(acc, {[value.color]: value.url})
        } else {
          return acc;
        }
      },{})

      const prettyData = {
        colorSet: allColors,
        imgData: data
      }

      res.send(prettyData)
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
