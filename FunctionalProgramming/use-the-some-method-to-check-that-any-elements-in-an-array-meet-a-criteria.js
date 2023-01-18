function checkPositive(arr) {
    return arr.some(currentValue => currentValue > 0);
}

checkPositive([1, 2, 3, -4, 5]);