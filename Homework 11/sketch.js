let mySound, goodFoodSound, badFoodSound;
let character;
let pizzaGroup, immovableObjectGroup;
let score = 0;
let health = 10;
let gameOver = false;
let win = false;
let particles = [];

let characterImages = {
  idle: [],
  run: [],
  attack: []
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
  for (let i = 0; i < 6; i++) {
    let paddedNumber = nf(i, 2);
    characterImages.attack.push(loadImage(`assets/attack_${paddedNumber}.png`));
  }
}

function setup() {
  new Canvas(1500, 900);
  character = new Sprite(width / 2, height / 2, 50, 50);
  pizzaGroup = new Group();
  immovableObjectGroup = new Group();

  character.addAnimation("idle", ...characterImages.idle);
  character.addAnimation("run", ...characterImages.run);
  character.addAnimation("attack", ...characterImages.attack);
  character.scale = 2;

  createPizzas();
  createImmovableObjects();
  
  if (mySound) mySound.loop();
}

function draw() {
  background(220);

  if (gameOver || win) {
    displayGameOver(gameOver ? "Game Over!" : "You Win!");
    return;
  }

  moveCharacter();
  updateParticles();
  allSprites.draw();
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
  for (let i = 0; i < 5; i++) {
    let obstacle = new Sprite(random(100, width - 100), random(100, height - 100), 100, 100);
    obstacle.immovable = true;
    obstacle.color = "green";
    obstacle.health = 3;
    immovableObjectGroup.add(obstacle);
  }
}

function moveCharacter() {
  character.vel.x = 0;
  character.vel.y = 0;

  if (kb.pressing("w")) character.vel.y = -5;
  if (kb.pressing("s")) character.vel.y = 5;
  if (kb.pressing("a")) {
    character.vel.x = -5;
    character.mirror.x = true;
  }
  if (kb.pressing("d")) {
    character.vel.x = 5;
    character.mirror.x = false;
  }

  if (kb.pressing("space")) {
    character.changeAnimation("attack");
    for (let i = immovableObjectGroup.length - 1; i >= 0; i--) {
      let obstacle = immovableObjectGroup[i];
      if (character.overlapping(obstacle)) {
        obstacle.health--;
        createParticles(obstacle.x, obstacle.y);
        if (obstacle.health <= 0) {
          obstacle.remove();
          immovableObjectGroup.remove(obstacle);
        }
      }
    }
    if (immovableObjectGroup.length === 0) win = true;
  } else {
    if (character.vel.x !== 0 || character.vel.y !== 0) {
      character.changeAnimation("run");
    } else {
      character.changeAnimation("idle");
    }
  }

  for (let i = pizzaGroup.length - 1; i >= 0; i--) {
    let pizza = pizzaGroup[i];
    if (character.overlapping(pizza)) {
      if (pizza.type === "good") {
        goodFoodSound.play();
        score++;
      } else {
        badFoodSound.play();
        health--;
        if (health <= 0) gameOver = true;
      }
      pizza.remove();
      pizzaGroup.remove(pizza);
    }
  }
}

function createParticles(x, y) {
  for (let i = 0; i < 15; i++) {
    particles.push({
      x: x,
      y: y,
      vx: random(-2, 2),
      vy: random(-2, 2),
      alpha: 255
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 5;
    fill(200, 200, 0, p.alpha);
    noStroke();
    circle(p.x, p.y, 5);
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}

function displayScore() {
  fill(0);
  textSize(24);
  text(`Score: ${score}`, 50, 50);
}

function displayHealth() {
  fill(255, 0, 0);
  textSize(24);
  text(`Health: ${health}`, 50, 100);
}

function displayGameOver(message) {
  background(220);
  fill(0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text(message, width / 2, height / 2);
}
