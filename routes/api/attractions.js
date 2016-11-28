/*jshint esversion: 6 */
/*jshint node: true */
'use strict';

const express = require('express');
const router = express.Router();
const models = require("../../models");
var Place = require('../../models/place');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

module.exports = router;

router.get("/hotels", function(req, res, next) {
	Hotel.findAll()
	.then(function(allTheHotels) {
		res.json(allTheHotels);
	}).catch(next);
});

router.get("/restaurants", function(req, res, next) {
	Restaurant.findAll()
	.then(function(allTheRestaurants) {
		res.json(allTheRestaurants);
	}).catch(next);
});

router.get("/activities", function(req, res, next) {
	Activity.findAll()
	.then(function(allTheActivities) {
		res.json(allTheActivities);				
	}).catch(next);
});