let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(1000, 650);
  background("pink");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0,0, 0, 0, 0, 0];
  circuloY = [random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height),random(height), random(height),random(height),random(height),random(height)];
}

function draw() {
  fill(cor);
  
  for (let contador in circuloX){
  circle(circuloX[contador], circuloY[contador], 10);
  circuloX[contador]+= random(-10,11);
  circuloY[contador]+= random(-8,8);

  if(circuloX [contador] >= width) {
  circuloX[contador] = 0;
  circuloY[contador] = random(height);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  }
}
  if(mouseIsPressed){
  cor = color(random(0, 255), random(0, 255), random(0, 255))
  }
}