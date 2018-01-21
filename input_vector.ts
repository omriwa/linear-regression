export default class InputVector {
    
    private input: Array;
    
    constructor(input:Array) {
        this.input = input;
    }
    
    get getVector() {
        return this.input;
    }
    
    private getIndexFromSymbol(symbol) {
        let index;
        
        if(symbol.toUpperCase() === 'X')
            index = 0;
        else
            index = 1;
            
        return index;
    }
    
    getCor(symbol) {
        let arr = [], index = this.getIndexFromSymbol(symbol);
        this.input.forEach(function(cell) {
            arr.push(cell[index]);
        });
        
        return arr;
    }
    
    //get the average distance
    getAvgDistance(symbol) {
        let sum = 0, 
            index = this.getIndexFromSymbol(symbol);
            
        this.input.forEach(function(inputCell) {
            sum += inputCell[index];
        });
        
        return sum / this.input.length;
    }
    
}

// let input = new InputVector([[1,2],[3,4]]);
// console.log(input.getCor('y'));