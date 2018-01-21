"use strict";
var InputVector = (function () {
    function InputVector(input) {
        this.input = input;
    }
    Object.defineProperty(InputVector.prototype, "getVector", {
        get: function () {
            return this.input;
        },
        enumerable: true,
        configurable: true
    });
    InputVector.prototype.getIndexFromSymbol = function (symbol) {
        var index;
        if (symbol.toUpperCase() === 'X')
            index = 0;
        else
            index = 1;
        return index;
    };
    InputVector.prototype.getCor = function (symbol) {
        var arr = [], index = this.getIndexFromSymbol(symbol);
        this.input.forEach(function (cell) {
            arr.push(cell[index]);
        });
        return arr;
    };
    //get the average distance
    InputVector.prototype.getAvgDistance = function (symbol) {
        var sum = 0, index = this.getIndexFromSymbol(symbol);
        this.input.forEach(function (inputCell) {
            sum += inputCell[index];
        });
        return sum / this.input.length;
    };
    return InputVector;
}());
exports["default"] = InputVector;
// let input = new InputVector([[1,2],[3,4]]);
// console.log(input.getCor('y')); 
