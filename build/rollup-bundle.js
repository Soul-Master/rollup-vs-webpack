(function () {
  'use strict';

  var PI = 3.14159;
  function add(x, y) {
    return x + y;
  }
  function multiply(x, y) {
    var result = 0;
    for (var i = 0; i < y; i++) {
      result = add(result, x);
    }
    return result;
  }

  console.info('mathLib.PI: ' + PI);

  var result = multiply(5, 4);
  console.info('result: ' + result);

}());
