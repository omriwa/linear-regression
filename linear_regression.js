"use strict";
var input_vector_1 = require('./input_vector');
var LinearRegression = (function () {
    function LinearRegression(vector) {
        this.vector = vector;
    }
    LinearRegression.prototype.calculateLinearRegression = function () {
        var xAverage, yAverage, xCor = this.vector.getCor('x'), yCor = this.vector.getCor('y'), xAvgDis, yAvgDis, mulAvgDis, b1, m;
        //cal the average of x and y
        xAverage = this.vector.getAvgDistance('x');
        yAverage = this.vector.getAvgDistance('y');
        //cal the square average distance of x and y
        xAvgDis = this.getNewArr(xCor, xAverage);
        yAvgDis = this.getNewArr(yCor, xAverage);
        //call the mul of the avrage distance of x and y
        mulAvgDis = this.mulTwoArr(xAvgDis, yAvgDis);
        //cal m
        b1 = (this.sum(mulAvgDis) / this.sum(xAvgDis, xAverage, 2)) * xAverage;
        m = yAverage - b1;
        return m;
    };
    LinearRegression.prototype.sum = function (arr, val, power) {
        if (val === void 0) { val = 0; }
        if (power === void 0) { power = 1; }
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += Math.pow(arr[i] - val, power);
        }
        ;
        return sum;
    };
    LinearRegression.prototype.getNewArr = function (arr, val) {
        var newArr = [];
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i] - val);
        }
        ;
        return newArr;
    };
    LinearRegression.prototype.mulTwoArr = function (arr1, arr2) {
        var output = [];
        for (var i = 0; i < arr1.length; i++)
            output.push(arr1[i] * arr2[i]);
        return output;
    };
    return LinearRegression;
}());
exports["default"] = LinearRegression;
var inputVector = new input_vector_1["default"]([[1, 4], [3, 2]]);
var lr = new LinearRegression(inputVector);
console.log(lr.calculateLinearRegression());
