var myImage;
var animation = [];
var myAnimations = [];
var i = 0;
var x = 0;
var y = 0;
var myPizza;
var pizzaArray = [];
var pizzaFound = false;

var myCharacter;
var speed = 5;

function preload() {
    for (var i = 0; i < 10; i++) {
        myAnimations = new Character(x,y,"assets/Attack__00" + i + ".png");
        animation.push(myAnimations)
        console.log(i)
    }
}

function setup() {
    createCanvas(1500, 900);
    setInterval(updateIndex, 50);
    for (let i = 0; i < 20; i++) {

        myPizza = new Pizza(random(100, 1000), random(100, 1000), 25);
        pizzaArray.push(myPizza);
    
    }
    
    
}

function draw() {
    background(220);
    move()
    animation[i].draw();
    for (let i = 0; i < pizzaArray.length; i++) {

        pizzaArray[i].draw();
    }
    
    

function move() {
    if (keyIsDown(87)) { 
        y -= speed;
    }
    if (keyIsDown(83)) { 
        y += speed;
    }
    if (keyIsDown(65)) {
        x -= speed;
    }
    if (keyIsDown(68)) { 
        x += speed;
    }
    for (let i = 0; i < 10; i++){
        animation[i].x = x;
        animation[i].y = y;

    }
   for (let k = 0; k < pizzaArray.length; k++) {
        if (animation[i].hasCollided(pizzaArray[k].breadX, pizzaArray[k].breadY, 50, 50)) {
            pizzaArray.splice(k, 1);
            
        }
    }

}
}
function updateIndex() {
    i++;
    if (i > 9) {
        i = 0;
    }
}
