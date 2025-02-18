var myImage;
var animation = [];
var myAnimations = [];
var i = 0;
var x = 0;
var myPizzas = [];
var myCharacter;

function preload() {
    for (var i = 0; i < 10; i++) {
        myAnimations = new animations("assets/Attack__00" + i + ".png");
        animation.push(myAnimations)
        console.log(i)
    }
}

function setup() {
    createCanvas(1500, 900);
    setInterval(updateIndex, 50);

    myPizza = new Pizza();

    
    myCharacter = new Character(100, 100, 50, random(255), random(255), random(255));
}

function draw() {
    background(220);
    animation[i].draw();

    myPizza.draw();

    
    myCharacter.move();
    myCharacter.draw();
}

function updateIndex() {
    i++;
    if (i > 9) {
        i = 0;
    }
}
