/**
 * Compute the sum of an array of numbers
 * @param {array} numbers
 * @returns {number}
 */
const total = (numbers) => {
    let sum = 0; //1
    for (let i = 0; i < numbers.length; i++) { //6
        sum += numbers[i]; //4
    }
    return sum;//1
} // T_16 (n) = 1 + 6i + 4 + 1  = 1 + 1*n + 1 + 1 = n = 0(n)