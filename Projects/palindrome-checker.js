function palindrome(str) {
    let string = str.toLowerCase().replace(/[^\w]/g, "").replace(/_/g, "");
    let newStr = string.split("").reverse().join("");
    //console.log(newStr);
    //console.log(string === newStr);
    return string === newStr;
}

palindrome("eye");
palindrome("_eye");