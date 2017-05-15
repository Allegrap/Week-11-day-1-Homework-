// var catList = document.createElement("ul");
// catList.classList.add("cat");

// var listItem1 = document.createElement("li");
// listItem1.innerText = "Name: Allegra";

// var listItem2 = document.createElement("li");
// listItem2.innerText = "Favourite food: steak";

// var listItem3 = document.createElement("li");
// var imageItem = document.createElement("img");

// listItem3.appendChild(imageItem);
// catList.appendChild(listItem1);
// catList.appendChild(listItem2);
// catList.appendChild(listItem3);

// var endProduct = document.querySelector("#cats");
// endProduct.appendChild(catList);



catArray = [
{ name: "Boba",
favouriteFood: "Sock fluff",
url: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{ name: "Barnaby",
favouriteFood: "Tuna",
url: "https://s-media-cache-ak0.pinimg.com/originals/7d/a4/68/7da46876859879003d27b0118dab8b0b.jpg"},
{ name: "Max",
favouriteFood: "Whiskas Temptations",
url: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
{ name: "Allegra",
favouriteFood: "Steak",
url: "http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg"},
{ name: "James", 
favouriteFood: "Ham",
url: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"}
];



var createCatList = function(){
  var catList = document.createElement("ul");
  catList.classList.add("cat");
  return catList;
};

createListItem1 = function(name){
  var listItem1 = document.createElement("li");
  listItem1.innerText = "Name: " + name;
  return listItem1;
};

createListItem2 = function(favFood){
  var listItem2 = document.createElement("li");
  listItem2.innerText = "Favourite food: " + favFood;
  return listItem2;
}

createListItem3 = function(){
  var listItem3 = document.createElement("li");
  return listItem3;
}

createImage = function(url){
  var imageItem = document.createElement("img");
  imageItem.setAttribute("src", url);
  imageItem.setAttribute("width", "500");
  return imageItem;
}

var appendElements = function(cats, catList, listItem1, listItem2, listItem3, img){
  listItem3.appendChild(img);
  catList.appendChild(listItem1);
  catList.appendChild(listItem2);
  catList.appendChild(listItem3);
  cats.appendChild(catList);
}

var addCat = function(name, favFood, url){
  var catList = createCatList();
  var listItem1 = createListItem1(name);
  var listItem2 = createListItem2(favFood);
  var listItem3 = createListItem3();
  var imageItem = createImage(url);
  var cats = document.getElementById("cats");
  appendElements(cats, catList, listItem1, listItem2, listItem3, imageItem);
};


var app = function(){

  for (var cat of catArray){
    addCat(cat.name, cat.favouriteFood, cat.url);
  }
};

window.onload = app;