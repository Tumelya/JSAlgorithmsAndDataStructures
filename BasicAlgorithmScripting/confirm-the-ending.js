function confirmEnding(str, target) {
    let regex = new RegExp(target + "$", "i");
    return regex.test(str);
}

confirmEnding("Bastian", "n");