const db = require('./index.js');

const getDefaultSet = (callback) => {
  const string = 'SELECT * FROM Shoes'
  db.query(string, (err, data) => {
    if (err) {
      callback(err)
    } else (
      callback(null, data)
    )
  })
};

const getRecItems = (callback) => {
  const string = 'SELECT url, name, price, size FROM Shirts UNION SELECT url, name, price, size FROM Pants UNION SELECT url, name, price, size FROM Socks UNION SELECT url, name, price, size FROM Accessories ORDER BY RAND() LIMIT 4'
  db.query(string, (err, data) => {
    if (err) {
      callback(err)
    } else (
      callback(null, data)
    )
  })
}


module.exports = {
  getDefaultSet,
  getRecItems
}