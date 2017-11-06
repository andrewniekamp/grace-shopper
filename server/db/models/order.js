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
  //i don't know if you need both isSubmitted and status. 
  //Ask yourself also is there a limited number of statuses? 
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
  //consider linking this to a hook
})

module.exports = Order;
