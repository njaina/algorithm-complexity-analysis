/*
 * We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach.
 * This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10.
 * If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10
 * (rounding to 10 means increasing the next significant digit by 1).
 * The process stops immediately once there is only one non-zero digit left.
 */
const rounders = (n) => {
  let r = 0; //1
  while (n > 10) { //2
    n = Math.round(n / 10); //4
    r++; //1
  }
  return n * Math.pow(10, r); // 4
};
// T_15(n) = 1 + 2 + 4 + 1 + 4 = 1 + 1 + 1 + 1 + 1 = 1 = O(1)

