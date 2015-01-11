'use strict';

var cheerio = require('cheerio');
var request = require('request');

var BASE_URL = 'https://skiplagged.com/';

function Skiplagged(opts) {
	opts = opts || {};
};

/**
 * Gets flights for a specific date and cities
 */
Skiplagged.prototype.flights = function(to, from, toDate, fromDate, opts) {
	opts = opts || {};

	var flightUrl;
	// to do: standardize date
	flightUrl += 'src?=' + 
	from + '&dst=' + 
	to + '&when=' + 
	fromDate + '&whenBack=' + 
	toDate + '&sort=cost';
	//https://skiplagged.com/?src=JFK&dst=ORD&when=2015-02-24&whenBack=2015-02-26&sort=cost
	console.log(flightUrl);
	getFlights(flightUrl);
};

function getFlights(CONSTRUCTED_URL) {
	this.url = CONSTRUCTED_URL;
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
    		console.log(body) 
  		}
	});
}

module.exports = Skiplagged;