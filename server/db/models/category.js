'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  }
})

module.exports = Category;
