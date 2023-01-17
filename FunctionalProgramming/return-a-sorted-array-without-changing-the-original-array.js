const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    return arr.slice().sort((a, b) => a - b);
    //return [].concat(arr).sort((a, b) => a - b);
}

nonMutatingSort(globalArray);