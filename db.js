const path = require('path');
const { DataTypes, Sequelize } = require('sequelize');

// TODO - connect to db via sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    // Datatypes: ,  
    storage: path.join(__dirname, "db.sqlite")
})

module.exports = {
    DataTypes,
    sequelize,
    // Sequelize
};
