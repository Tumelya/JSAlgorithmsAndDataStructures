function diffArray(arr1, arr2) {
    const newArr = [];
    newArr.push(
        ...arr1.filter(el => !arr2.includes(el, 0)),
        ...arr2.filter(el => !arr1.includes(el, 0))
    );
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);