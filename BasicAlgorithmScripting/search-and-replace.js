function myReplace(str, before, after) {
    if (before === before.toLowerCase()) {
        //console.log(str.replace(before, after.toLowerCase()));
        return str.replace(before, after.toLowerCase());
    } else {
        after = after.charAt(0).toUpperCase() + after.slice(1);
        //console.log(str.replace(before, after));
        return str.replace(before, after);
    }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");