var myImage;
var animation = [];
var runAnimation = [];
var i = 0;
var x = 0;
var y = 0;
var myPizza;
var pizzaArray = [];
var pizzaFound = false;

var myCharacter;
var speed = 5;

var idleStrings = [];
var runStrings = [];
var flipX = false;
var countDown = 60;
var countDownInterval;
let moving = false;
let gameOver = false;
var score = 0; 
let win = false;
var goodFoodSound, badFoodSound;

function preload() {
    soundFormats('mp3', 'ogg', 'wav');
    mySound = loadSound("sounds/background.mp3");
    goodFoodSound = loadSound("sounds/yummy.mp3"); 
    badFoodSound = loadSound("sounds/yucky.mp3");
    idleStrings = loadStrings("data/idle.txt");
    runStrings = loadStrings("data/run.txt");
}

function setup() {
    let myCanvas = createCanvas(1500, 900);
    setInterval(updateIndex, 140);

    userStartAudio().then(() => {
        mySound.setLoop(true);
        mySound.play();
    });

    for (let i = 0; i < 50; i++) {
        myPizza = new Pizza();
        pizzaArray.push(myPizza);
    }

   

    for (let i = 0; i < idleStrings.length; i++) {
        let idleCharacter = new Character(idleStrings[i], x, y); 
        animation.push(idleCharacter);
        let runCharacter = new Character(runStrings[i], x, y); 
        runAnimation.push(runCharacter);
    }
    
    countDownInterval = setInterval(updateCountDown, 1000);
}

function draw() {
    if (gameOver) {
        background(220);
        textSize(48);
        textAlign(CENTER, CENTER);
        fill(0);
        text("Game Over!", width / 2, height / 2);
        return; 
    }

    if (win) { 
        background(220);
        textSize(48);
        textAlign(CENTER, CENTER);
        fill(0);
        text("You Win!", width / 2, height / 2);
        return; 
    }

    background(220);
    moveCharacter(); 

    if (animation.length > 0 && runAnimation.length > 0) {
        if (moving) {
            runAnimation[i].draw();
        } else {
            animation[i].draw();
        }
    }
    
    movePizzaRandomly();
    displayFood();
    displayCountDown();
    displayScore();
}
playBackgroundSound();
function moveCharacter() {
    moving = false; 

    if (keyIsDown(87)) { // W Key
        y -= speed;
        flipX = true;
        moving = true;
    }
    if (keyIsDown(83)) { // S Key
        y += speed;
        flipX = false;
        moving = true;
    }
    if (keyIsDown(65)) { // A Key
        x -= speed;
        flipX = true;
        moving = true;
    }
    if (keyIsDown(68)) { // D Key
        x += speed;
        flipX = false;
        moving = true;
    }

    for (let i = 0; i < animation.length; i++) {
        animation[i].flipX = flipX;
        animation[i].x = x;
        animation[i].y = y;
        runAnimation[i].flipX = flipX;
        runAnimation[i].x = x;
        runAnimation[i].y = y;
    }

    let pizzasToRemove = []; 
    for (let k = 0; k < pizzaArray.length; k++) {
        if (collideRectRect(animation[i].x, animation[i].y, animation[i].imageWidth, animation[i].imageHeight, 
                            pizzaArray[k].breadX, pizzaArray[k].breadY, 25, 25)) {

            
            if (pizzaArray[k].type === "good") {
                goodFoodSound.play();
                score++; 
            } else {
                badFoodSound.play();
                 
            }

            pizzasToRemove.push(k);  
            checkWin(); 
        }
    }

    for (let k of pizzasToRemove) {
        pizzaArray.splice(k, 1);
    }
}


function checkWin() {
    if (score === 40) {
        win = true;  
    }
}

function updateCountDown() {
    if (gameOver) return; 
    countDown--;
    if (countDown === 0) {
        clearInterval(countDownInterval);
        gameOver = true; 
    }
}

function displayFood() {
    for (let i = 0; i < pizzaArray.length; i++) {
        pizzaArray[i].draw();
    }
}

function displayScore() {
    fill(0);
    textSize(24);
    text("Score: " + score, 50, 50);
}

function displayCountDown() {
    textSize(24);
    text("Time left: " + countDown, width - 200, 50);
}

function updateIndex() {
    i = (i + 1) % animation.length;
}
function playBackgroundSound()
{
    mySound.play();
}

function movePizzaRandomly() {
    for (let i = 0; i < pizzaArray.length; i++) {
        if (frameCount % int(random(50, 200)) === 0) {  
            pizzaArray[i].position(); 
        }
    }
}
