'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const ProductOrder = db.define('products_orders', {
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
})

module.exports = ProductOrder