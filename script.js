const arr = [1, 2, 3, 4, 1, 0, 2, 2];

function divide(arr, n) {
  // Write your code here
    const result = [];
    let currentChunk = [];
    let currentSum = 0;
    
    for (let num of arr) {
        if (currentSum + num > n) {
            result.push(currentChunk);
            currentChunk = [];
            currentSum = 0;
        }
        
        currentChunk.push(num);
        currentSum += num;
    }
    
    // Add the last chunk if it's not empty
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }
    
    return result;
}

const n = prompt("Enter n: ");
alert(divide(arr, n));
