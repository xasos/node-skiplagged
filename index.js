'use strict';

var cheerio = require('cheerio');
var request = require('request');

var BASE_URL = 'https://skiplagged.com/';

function Skiplagged() { };

/**
 * Gets flights for a specific date and cities
 */
Skiplagged.prototype.flights = function(from, to, when, whenBack) {
	var flightUrl = BASE_URL;
	
        // Construct URL for request
	flightUrl += '?src=' + 
	from + '&dst=' + 
	to + '&when=' + 
	when + '&whenBack=' + 
	whenBack + '&sort=cost';
	
	getFlights(flightUrl);
};

function getFlights(url) {
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
    		console.log(body);
			return body; 
  		} 
  		else {
  			return error;
  		}
	});
}

module.exports = Skiplagged;
