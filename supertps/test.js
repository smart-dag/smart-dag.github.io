function get_max(number, who) {
    //number 数字
    //who 被谁整除的数

    var count = number.toString().length;
    var first_number = parseInt(number.toString()[0]);
    var zero = "";
    for (let index = 0; index < count - 1; index++) {
        zero += "0";
    }
    var number2 = parseInt(first_number + zero);

    if (number2 < number) {
        number2 += parseInt(1 + zero);
    }

    function mod() {
        if (number2 % who == 0) {
            //如果能被4整除
        } else {
            number2 += parseInt(1 + zero);
            mod();
        }
    }
    mod();
    if (number2 == 0) {
        number2 += who;
    }
    return number2;
}
// for (let index = 0; index < 100; index++) {
//     var n = Math.floor(Math.random() * 1000);
//     console.log(n, get_max(n,4));
// }  

console.log(0, get_max(0, 4));