
# skiplagged-node

Node.js wrapper for [Skiplagged](http://skiplagged.com), the hidden-city travel site. This library scrapes result from Skiplagged and formats + returns the raw data for you to use.

## Installation 
```sh
$ npm install --save skiplagged-node 
```

## Usage
```javascript
var skiplagged = require('skiplagged');

skiplagged().flights('ORD', 'JFK', '');
```

## License 

[The MIT License](LICENSE)
