function translatePigLatin(str) {
    let regexVowels = /^([aeiou])/;
    if (str.match(regexVowels)) {
        console.log(str + "way");
        return str + "way";
    } else {
        let regexCons = /(^[^aeiou]+)/g;
        let consonants = str.match(regexCons);
        console.log(consonants);
        console.log(consonants[0].length);
        console.log(str.slice(consonants[0].length) + consonants[0] + "ay");
        return str.slice(consonants[0].length) + consonants[0] + "ay";
    }
}

translatePigLatin("consonant");
translatePigLatin("glove");
translatePigLatin("eight");
translatePigLatin("schwartz");