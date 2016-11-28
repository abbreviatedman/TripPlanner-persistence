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

// GET all the days
router.get("/", function(req, res, next) {
	Day.findAll()
	.then(function(allTheDays) {
		res.json(allTheDays);
	}).catch(next);
});

// CREATE a new day
router.post("/", function(req, res, next) {
  Day.create()
  .then(function(oneFineDay) {
    res.json(oneFineDay);
  }).catch(next);
});

// DELETE one specific day
router.delete("/:id", function(req, res, next) {
  Day.findOne(
    {where: {
      id: req.params.id
    }}
  )
  .then(function(oneFineDay) {
    //delete somehow
  }).catch(next);
});

// GET one specific day
router.get("/:id", function(req, res, next) {
  Day.findById(req.params.id)
  .then(function(oneFineDay) {
    res.json(oneFineDay);
  }).catch(next);
});

// ADD a restaurant to a specific day
router.get("/:id/restaurants", function(req, res, next) {
});

router.get("/:id/:restaurant", function(req, res, next) {
});

// DELETE a restaurant from a specific day
router.delete("/:id/:restaurant", function(req, res, next) {
});

// ADD an activity to a specific day
router.get("/:id/activities", function(req, res, next) {
});

router.get("/:id/:activity", function(req, res, next) {
});

// DELETE an activity from a specific day
router.delete("/:id/:activity", function(req, res, next) {
});
