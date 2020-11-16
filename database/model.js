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


module.exports = {
  getDefaultSet
}