var something = [];
var object = { a: false, b: true, c: true };
// for (let key in object) {
//   something.push(() => console.log(key))
// }
function what() {
    var _loop_1 = function (whatever) {
        var sum = 2 + 2;
        something.push(function () { return console.log(sum); });
    };
    for (var whatever in object) {
        _loop_1(whatever);
    }
}
something.forEach(function (item) { return what(); });
