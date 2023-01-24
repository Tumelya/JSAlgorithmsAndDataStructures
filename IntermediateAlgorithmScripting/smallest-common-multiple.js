const smallestCommons = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let array = [];

    for (min; min <= max; min++) {
        array.push(min);
    }

    let common = false;
    let n = max * (max - 1);
    const lowestCommon = (currentValue) => n % currentValue === 0;
    common = array.every(lowestCommon);

    while (common === false) {
        n++;
        common = array.every(lowestCommon);
    }

    return n;
}

smallestCommons([1, 5]);