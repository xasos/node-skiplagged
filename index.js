'use strict';

var cheerio = require('cheerio');
var request = require('request');

var BASE_URL = 'https://skiplagged.com/';

var output = {
	"time": "5h",
  	"startTime1": "3:17pm",
  	"endTime1": "6:13pm",
	"startDate": "2015-02-14",
	"endDate": "2015-02-15",
	"flightNumber1": "1432",
	"startTime2": "7:05pm",
	"endTime2": "8:50pm",
	"flightNumber2": "1480",
	"layoverTime": "52m",
	"startAirport": "ORD",
	"layoverAirport": "CLT",
	"endAirport": "JFK",
	"price": "106",
	"airline": "American Airlines",
	"flightURL": "http://api.skiplagged.com/asplkdasddpoisakd",
	"tripLength": "3d"
};
//add featured flights

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
	
	request(flightUrl, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);

	        return body; 
  		} 
  		else {
  			return error;
  		}
	});
};

function getFlights(url) {

}

module.exports = Skiplagged;