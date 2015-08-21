# extend-it [![Build Status](https://travis-ci.org/reinaldo13/extend-it.svg?branch=master)](https://travis-ci.org/reinaldo13/extend-it)
A Javascript helper for creating a subclass that extends from a super class. It uses Object.create() internally to achieve classical inheritance. This is for single inheritance, which is all that JavaScript(<ES6) supports.

## Installation
```shell
npm install extend-it --save
```

## Usage
```javascript
var extend = require('extend-it');

function Shape(xPos,yPos) {
  this.x = xPos;
  this.y = yPos;
}

// Rectangle extend Shape
var Rectangle = extend(Shape);

// new instance of Rectangle
var rectangle = new Rectangle(1, 2);

// check the properties inherited from Shape
console.log(rectangle.x);
console.log(rectangle.y);
```

## Tests
```shell
npm test
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History
* 1.0.0 Initial release
