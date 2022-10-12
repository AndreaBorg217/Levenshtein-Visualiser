/* eslint-disable prettier/prettier */
const resize = (array, requiredLength) => {
    while(array.length != requiredLength){
        array.push('');
    }
    return array;
}

const populateFirstRow = (start, matrix) =>{
    let string = ' ' + 'ε' + start;
    matrix[0] = Array.from(string)
}

const populateFirstCol = (target, matrix, start) =>{
    let string = 'ε' + target
    let char = 0
    for(let i = 1; i<matrix.length; i++){
        let row = resize([string[char]], (start.length) + 2)
        char++
        matrix[i] = row
    }
    
}

const populateSecondRow = (matrix) => {
    let max = matrix[1].length
    for(let i = 1; i<max; i++){
        matrix[1][i] = i - 1;
    }
}

const populateSecondCol = (matrix) => {
    for(let i = 2; i<matrix.length; i++){
        matrix[i][1] = i - 1
    }
}

const min = (a, b, c) => Math.min(Math.min(a, b),c)

const calcOperations = (matrix) =>{
    for(let row = 2; row<matrix.length; row++){
        let startLetter = matrix[row][0];
        for(let col = 2; col<matrix[1].length; col++){
            let targetLetter = matrix[0][col]
            let diag = matrix[row-1][col-1]
            let left = matrix[row][col-1]
            let above = matrix[row-1][col]
            let minimumOperation = min(diag, left, above)
            if(startLetter == targetLetter){
                matrix[row][col] = diag;
            }
            else{
                matrix[row][col] = minimumOperation + 1;
            }
        }
    }
}

const matrixColours = (matrix, start, target) =>{
    for(let i = 0; i<matrix[0].length; i++){
        matrix[0][i] = {contents: matrix[0][i], bg: '#134826', text: '#FFFFFF', underline: 'none'}
    }

    for(let row = 0; row<matrix.length; row++){
        matrix[row][0] = {contents: matrix[row][0], bg: '#134826', text: '#FFFFFF', underline: 'none'}
    }

    for(let row = 1; row<matrix.length; row++){
        for(let col = 1; col<matrix[1].length; col++){
            matrix[row][col] = {contents: matrix[row][col], bg: '#FFFFFF', text: '#000000', underline: 'none'}
        }
    }

    matrix[0][0] = {contents: '', bg: '#134826', text: '#FFFFFF', underline: 'none'}
    matrix[target.length + 1][start.length + 1] = {contents: matrix[target.length][start.length].contents, bg: '#FFFFFF', text: '#000000', underline: 'underline'}
}



export function operations(start, target){
    let longest = Math.max(start.length, target.length)
    let arrayStart = Array.from(start)
    let arrayTarget = Array(longest)
    
   resize(arrayStart, longest);

    arrayStart.forEach((char, index) => 
        {
            if (char && char == target[index]){
                arrayStart[index] = {letter: char, bg: '#FFFFFF'}
                arrayTarget[index] = {letter: char, bg: '#FFFFFF'}
            } //copy
            else if (char && target[index] && char != target[index]){
                arrayStart[index] = {letter: char, bg: '#F4D785'}
                arrayTarget[index] = {letter: target[index], bg: '#F4D785'}
            } //swap
            else if (!char && start.length < target.length){
                arrayStart[index] = {letter: char, bg: '#9CD2B4'}
                arrayTarget[index] = {letter: target[index], bg: '#9CD2B4'}
            } //insert
            else if (char && start.length > target.length){
                arrayStart[index] = {letter: char, bg: '#F47B74'}
                arrayTarget[index] = {letter: '', bg: '#F47B74'}
            } //delete
        }
    )
    console.log [arrayStart, arrayTarget]
   return [...arrayStart, ...arrayTarget];
}

export function createMatrix(start, target){
    let matrix = Array(target.length + 2)
    populateFirstRow(start, matrix)
    populateFirstCol(target,matrix, start)
    populateSecondRow(matrix)
    populateSecondCol(matrix)
    calcOperations(matrix)
    matrixColours(matrix, start, target)
    //console.table(matrix)
    return matrix;
}

