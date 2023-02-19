const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require("./Item")

Restaurant.hasMany(Menu)
Menu.belongsTo(Restaurant)

module.exports = { Restaurant, Menu, Item }
