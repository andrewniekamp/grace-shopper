"use strict";

const db = require("../db");
const Sequelize = require("sequelize");

const Order = db.define("order", {
  isSubmitted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Order;
