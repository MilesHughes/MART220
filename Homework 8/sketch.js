
let mySound, goodFoodSound, badFoodSound;
let character, characterIdle, characterRun;
let pizzaGroup, immovableObjectGroup;
let score = 0;
let health = 5;
let gameOver = false;
let win = false;

let characterImages = {
  idle: [],
  run: []
};

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  
  mySound = loadSound("sounds/background.mp3");
  goodFoodSound = loadSound("sounds/yummy.mp3");   
  badFoodSound = loadSound("sounds/yucky.mp3");
  
  for (let i = 0; i < 10; i++) {
    let paddedNumber = nf(i, 2);
    characterImages.idle.push(loadImage(`assets/idle_${paddedNumber}.png`));
  }

  for (let i = 0; i < 10; i++) {
    let paddedNumber = nf(i, 2);
    characterImages.run.push(loadImage(`assets/run${paddedNumber}.png`));
  }
}

function setup() {
  createCanvas(1500, 900);
  
  character = new Sprite(width / 2, height / 2, 50, 50);
  pizzaGroup = createGroup();
  immovableObjectGroup = createGroup(); 
  
  character.image = characterImages.idle[0];
  character.scale = 2;

  createPizzas();
  createImmovableObjects();

  if (mySound) {
    mySound.loop();
  }
}

function draw() {
  background(220);

  if (gameOver) {
    displayGameOver("Game Over!");
    return;
  }
  
  if (win) {
    displayGameOver("You Win!");
    return;
  }

  moveCharacter(); 

  pizzaGroup.draw();
  immovableObjectGroup.draw();

  displayHealth();
  displayScore();
}

function createPizzas() {
  for (let i = 0; i < 200; i++) {
    let pizza = new Sprite(random(25, width - 25), random(25, height - 25), 25, 25);
    pizza.type = random() > 0.7 ? "bad" : "good";
    pizza.color = pizza.type === "good" ? "saddlebrown" : "red";
    pizzaGroup.add(pizza);
  }
}

function createImmovableObjects() {
  for (let i = 0; i < 3; i++) {
    let obstacle = new Sprite(random(100, width - 100), random(100, height - 100), 100, 100, "static");
    obstacle.color = "gray";
    immovableObjectGroup.add(obstacle);
  }
}

function moveCharacter() {
  character.vel.x = 0;
  character.vel.y = 0;

  if (keyIsDown(87)) character.vel.y = -5;
  if (keyIsDown(83)) character.vel.y = 5;
  
  if (keyIsDown(65)) {
    character.vel.x = -5;
    character.mirror.x = true;
  }
  
  if (keyIsDown(68)) {
    character.vel.x = 5;
    character.mirror.x = false;
  }

  let currentTime = frameCount % 10;
  if (character.vel.x !== 0 || character.vel.y !== 0) {
    character.image = characterImages.run[currentTime];
  } else {
    character.image = characterImages.idle[currentTime];
  }

  character.overlaps(pizzaGroup, (sprite, pizza) => {
    if (pizza.type === "good") {
      if (goodFoodSound) goodFoodSound.play();
      score++;
    } else {
      if (badFoodSound) badFoodSound.play();
      health--;
      if (health <= 0) gameOver = true;
    }
    pizza.remove();
    checkWin();
  });

  character.collides(immovableObjectGroup);
}

function checkWin() {
  if (score >= 60) {
    win = true;
  }
}

function displayScore() {
  fill(0);
  textSize(24);
  textAlign(LEFT, TOP);
  text(`Score: ${score}`, 50, 50);
}

function displayHealth() {
  fill(0);
  textSize(24);
  fill(255, 0, 0); 
  textAlign(LEFT, TOP); 
  text(`Health: ${health}`, 50, 100);
}

function displayGameOver(message) {
  background(220);
  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text(message, width / 2, height / 2);
}
