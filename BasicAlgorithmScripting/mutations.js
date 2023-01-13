function mutation(arr) {
    let str = arr[0].toLowerCase();
    let chars = arr[1].toLowerCase();
    for (let i = 0; i < chars.length; i++) {
        if (str.indexOf(chars[i]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);