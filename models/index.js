const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')

Restaurant.hasMany(Menu)


module.exports = { Restaurant, Menu }
