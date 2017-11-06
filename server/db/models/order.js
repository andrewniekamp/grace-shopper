'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Order = db.define('order', {
  isSubmitted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

module.exports = Order;
