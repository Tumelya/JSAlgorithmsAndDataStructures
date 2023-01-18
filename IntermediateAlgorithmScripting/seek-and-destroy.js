function destroyer(arr) {
    const values = Array.from(arguments).slice(1);
    return arr.filter(el => !values.includes(el));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);