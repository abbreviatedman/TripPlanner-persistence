/* eslint-disable camelcase */

/*jshint esversion: 6 */
/*jshint node: true */
'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: Sequelize.INTEGER,
}, {
  hooks: {
    beforeValidate: {

    }
  }
});

module.exports = Day;
