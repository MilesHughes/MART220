class Character {
    constructor(x, y, size, r, g, b) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color(r, g, b); 
        this.speed = 5;
    }

    move() {
        if (keyIsDown(87)) { 
            this.y -= this.speed;
        }
        if (keyIsDown(83)) { 
            this.y += this.speed;
        }
        if (keyIsDown(65)) {
            this.x -= this.speed;
        }
        if (keyIsDown(68)) { 
            this.x += this.speed;
        }
    }

    draw() {
        fill(this.color); 
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }
}
