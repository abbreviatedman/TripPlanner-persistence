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

router.get("/days/:id", function(req, res, next) {
	Day.findOne(
		{where: {
			id: id
		}}
	)
	.then(function(oneFineDay) {
		res.json(oneFineDay);
	}).catch(next);
});

router.post("/days", function(req, res, next) {
});

router.get("days/:id/restaurants", function(req, res, next) {
});

router.get("days/:id/:restaurant", function(req, res, next) {
});

router.delete("days/:id/:restaurant", function(req, res, next) {
});

router.delete("/days/:id", function(req, res, next) {
	Day.findOne(
		{where: {
			id: id
		}}
	)
	.then(function(oneFineDay) {
		//delete somehow
	}).catch(next);
});