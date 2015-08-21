'use strict';

// for details about classical inheritance see: https://goo.gl/7dnYM8
module.exports = function(SuperClass) {
  // create a base class
  var SubClass = function () {
    SuperClass.apply(this, arguments); // call super constructor.
  };
  // subclass extends superclass
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
  // return the subclass
  return SubClass;
};
