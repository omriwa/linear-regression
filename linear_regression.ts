import InputVector from './input_vector';

export default class LinearRegression {
    
    private vector: InputVector;
    
    constructor(vector: InputVector) {
        this.vector = vector;
    }
    
    calculateLinearRegression() {
        let xAverage,
            yAverage,
            xCor = this.vector.getCor('x'),
            yCor = this.vector.getCor('y'),
            xAvgDis,
            yAvgDis,
            mulAvgDis,
            b1,
            m;
            
        //cal the average of x and y
        xAverage = this.vector.getAvgDistance('x');
        yAverage = this.vector.getAvgDistance('y');
        //cal the square average distance of x and y
        xAvgDis = this.getNewArr(xCor,xAverage);
        yAvgDis = this.getNewArr(yCor,xAverage);
        //call the mul of the avrage distance of x and y
        mulAvgDis = this.mulTwoArr(xAvgDis,yAvgDis);
        //cal m
        b1 = (this.sum(mulAvgDis) / this.sum(xAvgDis,xAverage,2)) * xAverage;
        m = yAverage - b1;
        
        return m;
    }
    
    sum(arr: Array, val: Number = 0, power: Number = 1) {
        let sum = 0;
        
        for(let i=0; i < arr.length; i++) {
            sum += Math.pow(arr[i] - val,power);
        });
        
        return sum;
    }
    
    getNewArr(arr: Array , val) {
        let newArr = [];
        console.log(arr);
        for(let i=0; i < arr.length; i++) {
            newArr.push(arr[i] - val);
        });
        
        return newArr;
    }
    
    mulTwoArr(arr1,arr2) {
        let output = [];
        
        for(let i=0; i < arr1.length; i++)
            output.push(arr1[i] * arr2[i]);
        
        return output;
    }
    
}
let inputVector = new InputVector([[1,4],[3,2]]);
var lr = new LinearRegression(inputVector);
console.log(lr.calculateLinearRegression());