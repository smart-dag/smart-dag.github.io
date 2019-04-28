var tools = {
    getFriendlyTime: function (timestamp) {
        //var time = timestamp2time(timestamp);
        var date = new Date();
        var date2 = new Date(timestamp * 1000);
        var time = date - date2;

        //存储转换值 
        var text;
        var s = 1000;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var w = d * 7;
        var M = d * 30;
        var y = M * 12;
        if (time < m) {//1分钟内
            text = Math.floor(time / s);
            return text + "秒前";
        } else if (time < m) {//1分钟内
            return '刚刚';
        } else if (m <= time && time <= h) {
            //超过1分钟少于1小时
            text = Math.floor(time / m);
            return text + "分钟前";
        } else if (h <= time && time <= d) {
            text = Math.floor(time / h);
            return text + "小时前";
        } else if (d <= time && time <= w) {
            text = Math.floor(time / d);
            return text + "天前";
        } else if (w <= time && time <= M) {
            text = Math.floor(time / w);
            return text + "周前";
        } else if (M <= time && time <= y) {
            text = Math.floor(time / M);
            return text + "月前";
        } else if (y <= time && time <= y * 10) {
            text = Math.floor(time / y);
            return text + "年前";
        } else {
            // //超过3天
            // var date = new Date(parseInt(date) * 1000);
            return date2.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        }
    },
    getTime: function (timestamp) {
        function fulltime(number) {
            if (number < 10) {
                return "0" + number.toString();
            } else {
                return number.toString()
            }
        }
        var date = new Date(timestamp * 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return fulltime(hours) + ":" + fulltime(minutes) + ":" + fulltime(seconds);
    },
    randomData: function randomData() {
        return parseInt(random_params.min + Math.random() * (random_params.max - random_params.min));
    },
    min_and_max: function (arr) {
        arr.sort(function (a, b) {
            return a - b;
        });
        var min = arr[0];
        var max = arr[arr.length - 1];
        return {
            min: min,
            max: max
        }
    },
    generateSmall: function generateSmall() {
        var ch_small = 'a';
        var str_small = '';
        for (var i = 0; i < 26; i++) {
            str_small += String.fromCharCode(ch_small.charCodeAt(0) + i);
        }
        return str_small;
    },
    generateBig: function () {
        var ch_big = 'A';
        var str_big = '';
        for (var i = 0; i < 26; i++) {
            str_big += String.fromCharCode(ch_big.charCodeAt(0) + i);
        }
        return str_big;
    },
    get_max: function (number, who) {
        if (!who) {
            who = 2;
        }
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
}