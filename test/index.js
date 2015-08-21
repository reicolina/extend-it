/*global describe, it*/
/*jshint expr: true*/
'use strict';

// Shape - superclass
function Shape(xPos,yPos) {
  this.x = xPos;
  this.y = yPos;
}

// superclass method
Shape.prototype.move = function() {
  return true;
};

var expect = require('chai').expect,
    extend = require('../index');

// extend a super class for testing
var Rectangle = extend(Shape),
    rectangle = new Rectangle(1, 2);
    rectangle.isAlive = function () {
        return true;
    };

describe('extend-it', function() {
    it('extends the super class', function () {
        expect(rectangle).to.be.instanceOf(Rectangle);
        expect(rectangle).to.be.instanceOf(Shape);
    });

    it('makes the sub class inherit the super class methods', function () {
        expect(rectangle.move()).to.be.ok;
    });

    it('makes the sub class inherit the super class constructors', function () {
        expect(rectangle.x).to.eql(1);
        expect(rectangle.y).to.eql(2);
    });

    it('allows the subclass to have its own methods', function () {
        expect(rectangle.isAlive).to.be.ok;
    });
});