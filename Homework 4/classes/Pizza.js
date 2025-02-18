class Pizza {

    constructor() {
        this.randomPosition(); 
    }

    
    randomPosition() {
        this.breadX  = random(width);  
        this.breadY = random(height);  
        this.breadSize = 200;

        this.sauceX = this.breadX;
        this.sauceY = this.breadY;
        this.sauceSize = 150;

        this.cheeseX = this.breadX;
        this.cheeseY = this.breadY;
        this.cheeseSize = 130;

        
        this.pep1X = this.breadX + random(-20, 20);
        this.pep1Y = this.breadY + random(-20, 20);
        this.pep2X = this.breadX + random(-25, 25);
        this.pep2Y = this.breadY + random(-20, 20);
        this.pep3X = this.breadX + random(-25, 25);
        this.pep3Y = this.breadY + random(-25, 25);
        this.pep4X = this.breadX + random(-20, 20);
        this.pep4Y = this.breadY + random(-20, 20);
        this.pep5X = this.breadX + random(-25, 25);
        this.pep5Y = this.breadY + random(-25, 25);
        this.pep6X = this.breadX + random(-20, 20);
        this.pep6Y = this.breadY + random(-20, 20);
    }

    draw() {
        fill(181, 101, 29); // Crust
        circle(this.breadX, this.breadY, this.breadSize);

        fill(255, 0, 0); // Sauce
        circle(this.sauceX, this.sauceY, this.sauceSize);

        fill(255, 255, 0); // Cheese
        circle(this.cheeseX, this.cheeseY, this.cheeseSize);

        fill(255, 100, 0); // Pepperoni
        noStroke();
        circle(this.pep1X, this.pep1Y, 20);
        circle(this.pep2X, this.pep2Y, 20);
        circle(this.pep3X, this.pep3Y, 20);
        circle(this.pep4X, this.pep4Y, 20);
        circle(this.pep5X, this.pep5Y, 20);
        circle(this.pep6X, this.pep6Y, 20);
    }

}