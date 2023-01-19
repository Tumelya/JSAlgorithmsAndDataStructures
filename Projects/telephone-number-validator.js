function telephoneCheck(str) {
    let reg1 = /^(\d{3})-(\d{3})-(\d{4})$/;
    let reg2 = /^\((\d{3})\)(\s)?(\d{3})-(\d{4})$/;
    let reg3 = /^(\d{3})\s(\d{3})\s(\d{4})$/;
    let reg4 = /^(\d{10})$/;
    let reg5 = /^(1)\s(\d{3})\s(\d{3})\s(\d{4})$/;
    let reg6 = /^(1)\s(\d{3})-(\d{3})-(\d{4})$/;
    let reg7 = /^(1)(\s)?\((\d{3})\)(\s)?(\d{3})-(\d{4})$/;

    console.log(reg1.test(str) || reg2.test(str) || reg3.test(str) || reg4.test(str)
        || reg5.test(str) || reg6.test(str) || reg7.test(str));

    return (reg1.test(str) || reg2.test(str) || reg3.test(str) || reg4.test(str)
        || reg5.test(str) || reg6.test(str) || reg7.test(str));
}

telephoneCheck("555-555-5555"); //true
telephoneCheck("1 555-555-5555"); //true
telephoneCheck("5555555555"); //true
telephoneCheck("555-5555"); //false
telephoneCheck("1 (555) 555-5555"); //true
telephoneCheck("1(555)555-5555"); //true
telephoneCheck("(555)555-5555"); //true
telephoneCheck("(555) 555-5555"); //true



