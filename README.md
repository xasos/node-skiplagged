
# skiplagged-node

Node.js wrapper for [Skiplagged](http://skiplagged.com), the hidden-city travel site. This library scrapes result from Skiplagged (the URL structure is fairly exposed) and formats the raw data for you to use.

## Installation 
```sh
$ npm install --save skiplagged-node 
```

## Usage
```javascript
var Skiplagged = require('skiplagged');
var sl - new Skiplagged();

sl.flights('ORD', 'JFK', '');
```

## Sample response 
```json
{
  time: "5h",
  startTime1: "3:17pm",
  endTime1: "6:13pm",
  flightNumber1: "1432"
  startTime2: "7:05pm",
  endTime2: "8:50pm",
  flightNumber2: "1480"
  layoverTime: "52m",
  startAirport: "ORD",
  layoverAirport: "CLT",
  endAirport: "JFK",
  price: "106",
  airline: "American Airlines",
  flightURL: "http://api.skiplagged.com/asplkdasddpoisakd"
}
```

## Uses
There are some very cool uses for using Skiplagged data. For example, you could create a Mac OS X extension that notifies you whenever a flight is cheaper than a certain price.

## License 

[The MIT License](LICENSE)
