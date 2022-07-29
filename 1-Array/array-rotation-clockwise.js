/**
 * Program for array rotation
 * 
 * Array = [1, 2, 3, 4, 5, 6, 7];
 * Rotate by = 2;
 * Output = [3, 4, 5, 6, 7, 1, 2];
 * ------------------------------------------------------------------------------------------------------
 * For first approach
 * - we start the arr from the position we want to rotate then we push the item in the result array.
 * - now we start the array from the start and goes till the position of rotate by.
 * 
 * @param arr Array
 * @param by rotate by
 * @returns result array
 */

const arr = [1, 2, 3, 4, 5, 6, 7];
const by = 2;

const approachOne = (arr, by) => {
    const result = [];
    for (let i = by; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < by; i++) {
        result.push(arr[i]);
    }

    return result;
};

console.log(approachOne(arr, by));

/**
 * ------------------------------------------------------------------------------------------------------
 * For second approach
 * - We loop through array by the number of position we want to rotate
 * - While looping through we will remove the first index element and push it to the end of the array
 * 
 * @param arr Array
 * @param by rotate by
 * @returns result array
 */
const approachTwo = (arr, by) => {
    for (let i = 0; i < by; i++) {
        const firstElem = arr.shift();
        arr.push(firstElem);
    }
    return arr;
};

console.log(approachTwo(arr, by));

/**
 * ------------------------------------------------------------------------------------------------------
 * For third approach
 * - It is same as first approach but without loop it is using array function to achieve the result
 * 
 * @param arr Array
 * @param by rotate by
 * @returns result array
 */
const approachThree = (arr, by) => {
    const result = arr.splice(by, arr.length - 1);
    return [...result, ...arr.splice(0, by)];
};

console.log(approachThree(arr, by));