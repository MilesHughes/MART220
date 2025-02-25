class Pizza {

    constructor() {
        this.position(); 
    }

    
    position() {
        this.breadX  = random(width);  
        this.breadY = random(height);  
        this.breadSize = 50;

        this.sauceX = this.breadX;
        this.sauceY = this.breadY;
        this.sauceSize = 30;

        this.cheeseX = this.breadX;
        this.cheeseY = this.breadY;
        this.cheeseSize = 25;

        
        this.pep1X = this.breadX;
        this.pep1Y = this.breadY;
        
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
        circle(this.pep1X, this.pep1Y, 10);
    }

}