'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
    //sometimes strings we want to not only make sure it's not null but also notEmpty=true
  }
})

module.exports = Category;
