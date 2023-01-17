const squareList = arr => {
    return arr.filter(n => n > 0 && Number.isInteger(n))
        .map(n => n * n);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);