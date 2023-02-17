const {DataTypes, sequelize} = require('../db');
// const { Sequelize } = require('sequelize');

// TODO - create a Menu model
const Menu = sequelize.define({
    title: DataTypes.STRING
})

module.exports = {Menu};