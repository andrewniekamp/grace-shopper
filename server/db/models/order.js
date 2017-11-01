'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Order = db.define('order', {
  isSubmitted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
  //is this enough info in the long run?
  //when did order get placed?
})

module.exports = Order;
