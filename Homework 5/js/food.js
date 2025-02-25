class food {

    constructor()
    {
        this.breadX  = 200;
        this.breadY = 200;
        this.breadSize = 200;

        this.sauceX = 200;
        this.sauceY = 200;
        this.sauceSize = 150;

        this.cheeseX = 200;
        this.cheeseY = 200;
        this.cheeseSize = 130;

        this.pep1X = 175;
        this.pep1Y = 175;
        this.pep2X = 225;
        this.pep2Y = 175;
        this.pep3X = 175;
        this.pep3Y = 225;
        this.pep4X = 225;
        this.pep4Y = 225;
        this.pep5X = 200;
        this.pep5Y = 160;
        this.pep6X = 200;
        this.pep6Y = 240;
    }

    draw()
    {
        fill(181, 101, 29); // Crust
        circle(this.breadX, this.breadY, this.breadSize);

        fill(255, 0, 0); // Sauce
        circle(this.sauceX, this.sauceY, this.sauceSize);

        fill(255, 255, 0); // Cheese
        circle(this.cheeseX, this.cheeseY, this.cheeseSize);

        fill(255, 100, 0);
        noStroke();
        circle(this.pep1X, this.pep1Y, 20);
        circle(this.pep2X, this.pep2Y, 20);
        circle(this.pep3X, this.pep3Y, 20);
        circle(this.pep4X, this.pep4Y, 20);
        circle(this.pep5X, this.pep5Y, 20);
        circle(this.pep6X, this.pep6Y, 20);

    }

}

var myPizza;

function setup(){
    createCanvas(400, 400);
    myPizza = new Pizza();
}

function draw()
{
    background(210, 180, 140); // Sets the background color to a light brown
    myPizza.draw(); 
}