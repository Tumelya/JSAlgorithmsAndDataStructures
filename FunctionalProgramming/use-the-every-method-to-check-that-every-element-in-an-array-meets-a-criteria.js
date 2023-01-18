function checkPositive(arr) {
    return arr.every(currentValue => currentValue > 0);
}

checkPositive([1, 2, 3, -4, 5]);