/**
 * Program for array rotation
 */

const arr = [1, 2, 3, 4, 5, 6, 7];
const byPosition = 2;

const rotateArrClockWise = (arr, by) => {
    const result = arr.splice(by, arr.length - 1);
    return [...result, ...arr.splice(0, by)];
}

console.log(rotateArrClockWise(arr, byPosition));