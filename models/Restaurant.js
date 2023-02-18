const {sequelize, DataTypes, /* Sequelize */} = require('../db');
// const {  } = require('sequelize');

// TODO - create a Restaurant model
const Restaurant = sequelize.define ("restaurant", {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    rating: DataTypes.NUMBER
})

module.exports = {Restaurant};