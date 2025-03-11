class Character {
    constructor(imagePath, x, y) {  
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.myImage = loadImage(imagePath); 
        this.imageWidth = 60;
        this.imageHeight = 120;
        this.flipX = false;
    }
  
    draw() {
        push();
        if (this.flipX) {
            translate(this.x + this.imageWidth, this.y);
            scale(-1.0, 1.0);
            image(this.myImage, 0, 0, this.imageWidth, this.imageHeight);
        } 
        else {
            image(this.myImage, this.x, this.y, this.imageWidth, this.imageHeight);
        }
        pop();
    }
  
    hasCollided(x, y, width, height) {
        return !(this.x > x + width || 
                 this.x + this.imageWidth < x || 
                 this.y > y + height || 
                 this.y + this.imageHeight < y);
    }
  }
  

