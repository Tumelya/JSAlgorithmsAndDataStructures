function convertToRoman(num) {
    if (typeof num !== 'number')
        return false;

    let digits = String(+num).split(""); //array of digits 36 => ["3", "6"];
    let key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let roman = "";
    let i = 3;

    while (i--) {
        roman = (key[+digits.pop() + (i * 10)] || "") + roman; //Step 1: key[26] + "" = "VI"; Step 2: key[13] + "VI" = "XXXVI";
    }
    return Array(+digits.join("") + 1).join("M") + roman; 
}

console.log(convertToRoman(36));
console.log(convertToRoman(1000));
console.log(convertToRoman(2014));