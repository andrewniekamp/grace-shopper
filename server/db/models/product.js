'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }, //consider making price an integer.
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  //what else do we want to think about for quantity???
  //can't have negative quantity. some default value here.
})

module.exports = Product;
