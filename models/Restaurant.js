const {sequelize, DataTypes, /* Sequelize */} = require('../db');
// const {  } = require('sequelize');

// TODO - create a Restaurant model
const Restaurant = sequelize.define ({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING
})

module.exports = {Restaurant};