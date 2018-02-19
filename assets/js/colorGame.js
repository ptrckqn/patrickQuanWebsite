var numSquares = 6;
var colors = generateRandColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var ez = document.querySelector("#ezButton");
var hard = document.querySelector("#hardButton");

ez.addEventListener("click", function(){
  hardButton.classList.remove("selected");
  ezButton.classList.add("selected");
  numSquares = 3;
  colors = generateRandColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
});

hard.addEventListener("click", function(){
  ezButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors = generateRandColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
});

reset.addEventListener("click", function(){
  colors = generateRandColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.innerHTML = pickedColor;
  messageDisplay.innerHTML = "";
  this.innerHTML = "New colors";

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }

  h1.style.backgroundColor = "steelblue";


});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.innerHTML = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
      reset.innerHTML = "Play again";
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.innerHTML = "Try Again";
    }
  });
}

colorDisplay.innerHTML = pickedColor;

function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var randColor = Math.floor(Math.random() * colors.length)
  return colors[randColor];
}

function generateRandColors(num){
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr[i] = randColor();

  }

  return arr;
}

function randColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
