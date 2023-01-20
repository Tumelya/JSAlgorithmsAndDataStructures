//Flatten a nested array. You must account for varying levels of nesting.

const steamrollArray = (arr) => {

    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            result.push(...steamrollArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    console.log(result);
    return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, {}, [3, [[4]]]]);