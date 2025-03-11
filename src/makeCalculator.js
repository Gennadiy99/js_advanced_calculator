'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
    result: 0,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error('Деление на ноль невозможно');
      }
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (callbeck, num1) {
      this.result = callbeck(this.result, num1);

      return this;
    },
  };
}

const Calculator = makeCalculator();

Calculator.operate(Calculator.add, 21)
  .operate(Calculator.subtract, 2)
  .operate(Calculator.divide, 10);

module.exports = makeCalculator;
