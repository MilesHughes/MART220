class Pizza {
    constructor() {
        this.position(); 
        this.type = random() > 0.8 ? "bad" : "good"; 
    }

    position() {
        this.breadX  = constrain(random(width), 25, width - 25);  
        this.breadY = constrain(random(height), 25, height - 25);
        this.breadSize = 25;
    }

    draw() {
        if (this.type === "good") {
            fill(181, 101, 29); 
        } else {
            fill(100, 0, 0); 
        }
        circle(this.breadX, this.breadY, this.breadSize);
    }
}
