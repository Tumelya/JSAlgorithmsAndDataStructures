function chunkArrayInGroups(arr, size) {
    const res = [];
    while (arr.length > 0) {
        res.push(arr.splice(0, size));
    }
    return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);