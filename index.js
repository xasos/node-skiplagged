'use strict';

var cheerio = require('cheerio');
var request = require('request');

function Skiplagged(opts) {
	opts = opts || {};
};

/**
 * Gets flights for a specific date
 */
Skiplagged.prototype.flights = function(to, from, opts) {
	opts = opts || {};
};

module.exports = Skiplagged;