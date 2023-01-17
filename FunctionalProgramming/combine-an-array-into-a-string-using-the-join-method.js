function sentensify(str) {
    let arr = str.split(/\W/);
    return arr.join(" ");
}

sentensify("May-the-force-be-with-you");