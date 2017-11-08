'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Order = db.define('order', {
  isSubmitted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Pending'
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  codeApplied: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  orderTotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
})

module.exports = Order;
