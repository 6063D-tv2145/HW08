let mImg;
let blueSlider;
let blue;

function preload() {
  mImg = loadImage("./PietMondriaan.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height);

  // Creating a slider
  blueSlider = createSlider(120,255,255)
  blueSlider.position(10, 12);

  //variable to hold color
  blue = 220;
}

function draw() {
  background("white");

  mImg.loadPixels();

  textAlign(LEFT, TOP);
  text('change blue to green', 16 + blueSlider.width, 16);
  blue = blueSlider.value();


  for (let i = 0; i < mImg.pixels.length; i += 4) {
    let r = mImg.pixels[i+0];
    let g = mImg.pixels[i + 1];
    let b = mImg.pixels[i + 2];

    // is the pixel red?
    if (isRed(r, g, b)) {
      mImg.pixels[i+0] = 255;
      mImg.pixels[i + 1] = 182;
      mImg.pixels[i + 2] = 193; // if yes, make it pastel pink
    }
    // is the pixel yellow?
    else if (isYellow(r, g, b)) {
      mImg.pixels[i+0] = 173;
      mImg.pixels[i + 1] = 216;
      mImg.pixels[i + 2] = blue; // if yes, make it pastel blue
    }

    else if (isBlue(r, g, b)) {
      mImg.pixels[i+0] = 118;
      mImg.pixels[i + 1] = 0;
      mImg.pixels[i + 2] = 160; // if yes, make it purple
    }
  }

  mImg.updatePixels();
  image(mImg, (width - mImg.width) / 2, 0);
}

//function to check red color ratios
function isRed(r, g, b) {
  return r > 140 && g < 105 && b < 115;
}
//function to check red color ratios
function isYellow(r, g, b) {
  if (r > 140 && g > 130 && b < 110 || r==173 && g==216){
  return true;
  }
}

function isBlue(r, g, b) {
  return r < 75 && g > 40 && b > 70;
}

