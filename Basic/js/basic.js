var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        var sum = arr[i] * (j + 1);
        console.log(sum);
    }
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var value1 = arr_2[_a];
        var sum = value * value1;
        console.log(value +"*" + value1 +"="+sum);
    }
}
