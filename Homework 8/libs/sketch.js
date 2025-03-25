let mySound, goodFoodSound, badFoodSound;  
let character, characterIdle, characterRun;  
let pizzaGroup;  
let score = 0;  
let countDown = 60;  
let gameOver = false;  
let win = false;  
let moving = false;  

// Store image paths from text files  
let idleStrings = [];  
let runStrings = [];  

function preload() {  
    // Load sound files  
    soundFormats('mp3', 'ogg', 'wav');  
    mySound = loadSound("sounds/background.mp3");  
    goodFoodSound = loadSound("sounds/yummy.mp3");   
    badFoodSound = loadSound("sounds/yucky.mp3");  

    // Load image paths from text files  
    idleStrings = loadStrings("data/idle.txt");  
    runStrings = loadStrings("data/run.txt");  

    // Load character animations from the loaded paths  
    characterIdle = loadAnimation(...idleStrings);  
    characterRun = loadAnimation(...runStrings);  
}  

function setup() {  
    let myCanvas = createCanvas(1500, 900);  
    
    // Create character sprite  
    character = createSprite(width/2, height/2);  
    character.addAnimation('idle', characterIdle);  
    character.addAnimation('run', characterRun);  
    character.scale = 0.5; // Adjust scale as needed  

    // Create pizza group  
    pizzaGroup = new Group();  
    createPizzas();  

    // Start background music  
    userStartAudio().then(() => {  
        mySound.setLoop(true);  
        mySound.play();  
    });  

    // Start countdown  
    setInterval(updateCountDown, 1000);  
}  

function createPizzas() {  
    for (let i = 0; i < 50; i++) {  
        let pizza = createSprite(  
            random(25, width - 25),   
            random(25, height - 25)  
        );  
        
        // Randomly decide pizza type  
        pizza.type = random() > 0.8 ? "bad" : "good";  
        
        // Color the pizza based on type  
        if (pizza.type === "good") {  
            pizza.shapeColor = color(181, 101, 29);  // Brown for good pizza  
        } else {  
            pizza.shapeColor = color(100, 0, 0);  // Dark red for bad pizza  
        }  
        
        pizza.scale = 0.5;  
        pizzaGroup.add(pizza);  
    }  
}  

function draw() {  
    background(220);  

    // Game over or win conditions  
    if (gameOver) {  
        displayGameOver("Game Over!");  
        return;  
    }  

    if (win) {  
        displayGameOver("You Win!");  
        return;  
    }  

    // Character movement  
    moveCharacter();  

    // Draw sprites  
    drawSprites();  

    // Display UI  
    displayScore();  
    displayCountDown();  
}  

function moveCharacter() {  
    character.velocity.x = 0;  
    character.velocity.y = 0;  
    
    // Movement using WASD keys  
    if (keyDown('w')) {  
        character.velocity.y = -5;  
        character.changeAnimation('run');  
        character.mirrorX(-1);  
        moving = true;  
    }  
    if (keyDown('s')) {  
        character.velocity.y = 5;  
        character.changeAnimation('run');  
        character.mirrorX(1);  
        moving = true;  
    }  
    if (keyDown('a')) {  
        character.velocity.x = -5;  
        character.changeAnimation('run');  
        character.mirrorX(-1);  
        moving = true;  
    }  
    if (keyDown('d')) {  
        character.velocity.x = 5;  
        character.changeAnimation('run');  
        character.mirrorX(1);  
        moving = true;  
    }  

    // If not moving, show idle animation  
    if (!moving) {  
        character.changeAnimation('idle');  
    }  
    moving = false;  

    // Pizza collection  
    character.overlap(pizzaGroup, collectPizza);  
}  

function collectPizza(character, pizza) {  
    if (pizza.type === "good") {  
        goodFoodSound.play();  
        score++;  
    } else {  
        badFoodSound.play();  
    }  
    pizza.remove();  
    checkWin();  
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
        gameOver = true;  
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

function displayGameOver(message) {  
    background(220);  
    textSize(48);  
    textAlign(CENTER, CENTER);  
    fill(0);  
    text(message, width / 2, height / 2);  
}  
