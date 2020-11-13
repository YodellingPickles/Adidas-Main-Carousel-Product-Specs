const db = require('./index.js');

const getDefaultSet = (callback) => {
  const string = 'SELECT * FROM Shoes WHERE color = ?'
  const arg = ['grey']
  db.query(string, arg, (err, data) => {
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