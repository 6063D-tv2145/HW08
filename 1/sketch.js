let country;
let audioPeaks;

let blueSlider;
let redSlider;
let greenSlider;

let blue;
let red;
let green;

function preload(){
  country = loadSound("./29.mp3");
}

function setup(){
  createCanvas (windowWidth,windowHeight)
  audioPeaks = country.getPeaks(windowWidth)
  country.play();

  // Creating sliders
  redSlider = createSlider(0,255,47)
  redSlider.position(10, 32);

  blueSlider = createSlider(0,255,55)
  blueSlider.position(10, 12);

  greenSlider = createSlider(0,255,202)
  greenSlider.position(10, 52);

  //variable to hold color
  red = 47;
  blue = 55;
  green = 202;
}

function draw(){
  background(red, blue, green,1);

  blue = blueSlider.value();
  red = redSlider.value();
  green = greenSlider.value();

  for (let i=0; i <= audioPeaks.length;i++){
    stroke(red,blue, green)
    line(i, height/2 + audioPeaks[i]*400, i, height/2 - audioPeaks[i]*400)
  }
}