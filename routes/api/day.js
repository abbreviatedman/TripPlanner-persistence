/*jshint esversion: 6 */
/*jshint node: true */
'use strict';

const express = require('express');
const router = express.Router();
const models = require("../../models");
var Day = require('../../models/day');

// var Hotel = require('../../models/hotel');
// var Restaurant = require('../../models/restaurant');
// var Activity = require('../../models/activity');

module.exports = router;

router.get("/days", function(req, res, next) {
	Day.findAll()
	.then(function(allTheDays) {
		res.json(allTheDays);
	}).catch(next);
});

router.post("/days", function(req, res, next) {
});

router.put("/days", function (req, res, next) {
});

router.delete("/days", function (req, res, next) {
});