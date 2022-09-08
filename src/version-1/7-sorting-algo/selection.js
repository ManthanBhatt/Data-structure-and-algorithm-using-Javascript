/**
 * Selection sort
 * in this we first find the min value from the array and swap it
 */

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minInd = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minInd]) minInd = j;
        }
        [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
    }

    console.log(arr);
}

selectionSort([64, 25, 12, 22, 11])