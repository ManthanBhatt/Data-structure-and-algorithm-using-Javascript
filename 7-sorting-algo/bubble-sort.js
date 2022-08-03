/**
 * Bubble sort work by swapping adjacent value in the array
 */

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    console.log(arr);
}

bubbleSort([64, 25, 12, 22, 11])