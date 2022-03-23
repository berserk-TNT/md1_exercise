let row = 3;
let col = 6;
let min = 10;
let max = 80;
let matrix = new Array(row);
for (let i = 0; i < matrix.length; i++) {
let array = new Array(col);
for (let j = 0; j < array.length; j++) {
array[j] = Math.floor(Math.random() * (max - min + 1) + min);
}
matrix[i] = array;  
}
console.log(matrix);