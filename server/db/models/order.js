'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Pending'
  }
})

module.exports = Order;

// const Order = db.define('order', {
//   isSubmitted: {
//     type: Sequelize.BOOLEAN,
//     defaultValue: false
//   }
// })
