function addTogether(...args) {
    const [first, second] = args;
    if (args.length === 1 && typeof first === 'number') {
        return num => {
            if (typeof num === 'number') {
                return first + num;
            }
        }
    }
    if (typeof first === 'number' && typeof second === 'number') {
        return first + second;
    }
}
console.log(addTogether(2, 3));
console.log(addTogether(5)(7));
