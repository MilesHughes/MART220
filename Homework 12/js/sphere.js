class Sphere extends threedshape{

    constructor(x, y, speedX, speedY, radius, sphereRadius)
    {
        super(x,y, speedX, speedY);
        this.radius = radius;
        this.sphereRadius = sphereRadius;

    }

    draw()
    {
        push();
        super.moveShape();
        noStroke();
    
        emissiveMaterial(0,0,255);
        sphere(this.radius, this.sphereRadius);
        pop();
    }
}