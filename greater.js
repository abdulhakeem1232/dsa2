// function nextGreaterElement(arr) {
//     const stack = [];
//     const result = new Array(arr.length).fill(-1);

//     for (let i = 0; i < arr.length; i++) {
//         while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
//             const index = stack.pop();
//             console.log(i);
//             result[index] = arr[i];
//         }
//         stack.push(i);
//     }

//     return result;
// }

// const inputArray = [4, 5, 2, 10, 8];
// console.log(nextGreaterElement(inputArray));


function generateBinaryNumbers(n) {
    const result = [];
    const queue = ["1"];

    for (let i = 0; i < n; i++) {
        const binaryNumber = queue.shift();
        result.push(binaryNumber);

        queue.push(binaryNumber + "0");
        queue.push(binaryNumber + "1");
    }

    return result;
}
const n = 5;
const binaryNumbers = generateBinaryNumbers(n);
console.log(binaryNumbers);





