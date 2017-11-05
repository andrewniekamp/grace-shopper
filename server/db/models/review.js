'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    defaultValue: 'None'
  },
  body: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Review
