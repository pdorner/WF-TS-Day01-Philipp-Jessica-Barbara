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
let winter = {
   name: "winter-cupcake",
   price: "5.99",
   img: "./img/food5.jpg",
   
};
var halloween = {
    name: "halloween-cupcake",
    price: "6.99",
    img: "./img/food7.jpg",

     
};
var unicorn = {
    name: "unicorn-cupcake",
    price: "6.99",
    img: "./img/food2.jpg",

     
};var gold = {
    name: "gold-cupcake",
    price: "25000.99",
    img: "./img/food4.png",

     
};var pink = {
    name: "pink-cupcake",
    price: "3.99",
    img: "./img/food3.jpg",

     
};var sugar = {
    name: "sugarcorn-cupcake",
    price: "6.99",
    img: "./img/food6.jpg",

     
};

//creat in loop accordion 
var menu : Array<any>=[winter, halloween, unicorn, gold, pink, sugar];
const star = "&#11088";

for(let i = 0; i<menu.length;i++){
	       $(".accordion").append(`<div class="card">
                            <div class="card-header" id="heading${+i}">
                                <h2 class="mb-0">
                                    <button style="width :100%" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${+i}" aria-expanded="false" aria-controls="collapse${+i}">
                                        <div class="row"><h3 class="col-6 text-left offset-1">${menu[i].name}</h3>  
	       								<h3 class="col-4 text-right">${menu[i].price} €</h3></div>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapse${+i}" class="collapse" aria-labelledby="heading${+i}" data-parent="#accordionExample">
                                <div class="card-body row">
                                	<img style="object-fit:cover" class="card-img col-4 offset-1" src="${menu[i].img}">
                                	<div class="col-1 flex flex-column"><div class="h2 star">${star}</div><div class="h2 star">${star}</div><div class="h2 star">${star}</div><div class="h2 star">${star}</div><div class="h2 star">${star}</div></div>
                                	<textarea class="col-5"></textarea>
                                    <button class="btn btn-dark col-2 offset-9 mt-1">Send Feedback</button>
                                </div>
                            </div>
                        </div>`);
}

var hx = document.getElementById("carousel-item").offsetWidth
var heightLg = hx/16*8.5
var heightMd = hx/16*7
console.log(hx)
$(".col-md-12").css("height",heightMd)
$(".col-lg-12").css("height",heightLg)
