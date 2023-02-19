const {Datatypes, sequelize, DataTypes} = require("../db")

const Item = sequelize.define("item", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.NUMBER,
    vegetarian: DataTypes.BOOLEAN
})

module.exports = {Item}