/**
 * Compute the sum of an array of numbers
 * @param {array} numbers
 * @returns {number}
 */
const total = (numbers) => {
    let sum = 0; //1
    for (let i = 0; i < numbers.length; i++) { //4
        sum += numbers[i]; //2
    }
    return sum;//1
}
/* raw number: 7 => 1
               8 => 4 * i
               9 => 2
               11 => 2

T_16 (n) = 1 + 4*i (2) + 2 + 1
         = 1 + 1*i (1) +1 + 1
         =i=n
    T_16 (n) = O (n)
