var images = document.querySelectorAll(".img");
var interval;
var count = 1;

var clothes = document.getElementsByClassName("clothes")[0];
var furniture = document.getElementsByClassName("furniture")[0];
var shoes = document.getElementsByClassName("shoes")[0];
var toys = document.getElementsByClassName("toys")[0];

var countproduct = document.getElementsByClassName("total-count")[0];
var addToCart = document.getElementsByClassName("add-to-cart-btn");
var n = 0;

var backtotop = document.getElementById("backtotop");
////slider

function next() {
  count++;
  if (count > images.length) {
    count = 1;
  }
  if (count == 0) {
    count = images.length;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[count - 1].style.display = "block";
}

function previous() {
  count--;

  if (count > images.length) {
    count = 0;
  }
  if (count == 0) {
    count = images.length;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[count - 1].style.display = "block";
}

function play() {
  interval = setInterval(function () {
    next();
  }, 2000);
}
play();

///filteration

var filterDiv = document.getElementsByClassName("filtered")[0];

function filterProducts(className) {
  if (className == "all") {
    console.log(clothes, shoes);
    clothes.style.display = "flex";
    furniture.style.display = "flex";
    shoes.style.display = "flex";
    toys.style.display = "flex";
  } else {
    clothes.style.display = "none";
    furniture.style.display = "none";
    shoes.style.display = "none";
    toys.style.display = "none";
  }
  if (className == "clothes") {
    clothes.style.display = "flex";
  }
  if (className == "furniture") {
    furniture.style.display = "flex";
  }
  if (className == "shoes") {
    shoes.style.display = "flex";
  }
  if (className == "toys") {
    toys.style.display = "flex";
  }
}

filterProducts("all");

//Cart Count
for (var i = 0; i < addToCart.length; i++) {
  addToCart[i].onclick = function totalCount() {
    n++;
    console.log(n);
    countproduct.innerHTML = n;
  };
}

//backtotop
backtotop.onclick = function () {
  window.scrollTo(0, 0);
};
