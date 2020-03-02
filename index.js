var randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img1").attributes.src.value = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img2").attributes.src.value = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "You Win";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "You Loose";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
