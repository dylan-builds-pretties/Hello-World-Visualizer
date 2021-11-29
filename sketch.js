var chord1;
var chord2;
var kick;
var snare;

var amp_1;
var amp_2;
var amp_3;
var amp_4;


function setup () {
  createCanvas(600,600);

  chord1 = loadSound("Chord1.wav", loaded);
  chord2 = loadSound("Chord2.wav", loaded);
  kick = loadSound("Kick.wav", loaded);
  snare = loadSound("Snare.wav", loaded);
  
  //insert sliders here if wanted

  amp_1 = new p5.Amplitude();
  amp_1.setInput(chord1);

  amp_2 = new p5.Amplitude();
  amp_2.setInput(chord2);

  amp_3 = new p5.Amplitude();
  amp_3.setInput(kick);

  amp_4 = new p5.Amplitude();
  amp_4.setInput(snare);

  background(255);
}

function loaded () {
  chord1.play();
  chord2.play();
  kick.play();
  snare.play();
}



function draw() {
  background (0);

  //Chord 1
  fill(200, 50, 75);
  var vol_1 = amp_1.getLevel();
  var diam_1 = map(vol_1, 0, 0.3, 0, 100);
  ellipse(width/5, height/5, diam_1, diam_1);
  
  //Chord 2
  fill(200, 30, 50);
  var vol_2 = amp_2.getLevel();
  var diam_2 = map(vol_2, 0, 0.3, 0, 100);
  ellipse(width/3, height/3, diam_2, diam_2);
  
  //Kick
  fill(0, 50, 250);
  var vol_3 = amp_3.getLevel();
  var diam_3 = map(vol_3, 0, 0.3, 0, 200);
  ellipse(width/2, height/2, diam_3, diam_3);

  
  //Snare
  fill(0, 200, 100);
  var vol_4 = amp_4.getLevel();
  var diam_4 = map(vol_4, 0, 0.3, 0, 150);
  ellipse(width/1.5, height/2, diam_4, diam_4);

}