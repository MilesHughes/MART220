class Cone extends threedshape {
    constructor(x, y, speedX, speedY, radius, coneRadius, flip = false) {
        super(x, y, speedX, speedY);
        this.radius = radius;
        this.coneRadius = coneRadius;
        this.flip = flip; 
    }

    draw() {
        push();
        super.moveShape();
        noStroke();
        texture(concreteTexture);
        
        if (this.flip) {
            rotateX(PI); 
        }

        cone(this.radius, this.coneRadius);
        pop();
    }
}