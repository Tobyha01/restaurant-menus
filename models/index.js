const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require("./Item")

Restaurant.hasMany(Menu)
Menu.belongsTo(Restaurant)

Menu.belongsToMany(Item, {through: "menuItems", as: "Items"})
Item.belongsToMany(Menu, {through: "menuItems", as: "Menus"})

module.exports = { Restaurant, Menu, Item }
