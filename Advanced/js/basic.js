// let something = []
// let object = { a: true, b: true, c: true }
// for (let key in object) {
//   // this time push a string, instead of an anonymous function
//   something.push("the key is: " + key)
// }
// var w : any = function(){
// 	console.log ("Hello");
// }
// for (let whatever in something) {
//   something.push(w);
// }
// something.forEach(str => w());
// console.log(something);
// something[3].w();
//create CupCakes with values for name, price, img
var winter = {
    name: "winter-cupcake",
    price: "5.99",
    img: "./img/food5.jpg"
};
var halloween = {
    name: "halloween-cupcake",
    price: "6.99",
    img: "./img/food7.jpg"
};
var unicorn = {
    name: "unicorn-cupcake",
    price: "6.99",
    img: "./img/food2.jpg"
};
var gold = {
    name: "gold-cupcake",
    price: "25000.99",
    img: "./img/food4.png"
};
var pink = {
    name: "pink-cupcake",
    price: "3.99",
    img: "./img/food3.jpg"
};
var sugar = {
    name: "sugarcorn-cupcake",
    price: "6.99",
    img: "./img/food6.jpg"
};
//creat in loop accordion 
var menu = [winter, halloween, unicorn, gold, pink, sugar];
var star = "&#11088";
for (var i = 0; i < menu.length; i++) {
    $(".accordion").append("<div class=\"card\">\n                            <div class=\"card-header\" id=\"heading" + +i + "\">\n                                <h2 class=\"mb-0\">\n                                    <button style = \"width :90%\" class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse" + +i + "\" aria-expanded=\"false\" aria-controls=\"collapse" + +i + "\">\n                                        <div class =\"row\"><h3 class=\"col-7 offset-1\">" + menu[i].name + "</h3>  \n\t       \t\t\t\t\t\t\t\t<h3 class=\"col-3 text-right\">" + menu[i].price + " \u20AC</h3></div>\n                                    </button>\n                                </h2>\n                            </div>\n                            <div id=\"collapse" + +i + "\" class=\"collapse\" aria-labelledby=\"heading" + +i + "\" data-parent=\"#accordionExample\">\n                                <div class=\"card-body row\">\n                                \t<img class=\"card-img col-4\" src=\"" + menu[i].img + "\">\n                                \t<div class = \"col-2\">" + star + star + star + star + star + "</div>\n                                \t<input class=\"col-6\" ></input>\n                                </div>\n                            </div>\n                        </div>");
}
