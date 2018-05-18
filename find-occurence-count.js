/**
 * Find occurence of each element in an array and print.
 * Input: [2, 1, 3, 7, 2, 3, 3, 7, 8, 4, 9, 22, 13, 15, 13, 3]
 * Output: 2:2, 1:1, 3:4..
 */

const arr = [2, 1, 3, 7, 2, 3, 3, 7, 8, 4, 9, 22, 13, 15, 13, 3]
const counts = {}
arr.reduce((counts, x) => {
   counts[x] = (counts[x] || 0) + 1
   return counts
 }, counts)

console.log(counts);
