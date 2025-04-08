class Box extends threedshape
{
    constructor(x, y, speedX, speedY, width, height)
    {
        super(x,y, speedX, speedY);
        this.width = width;
        this.height = height;

    }

    draw()
    {
        push();
        super.moveShape();
        noStroke();
        texture(concreteTexture);
        box(this.width, this.height);
        pop();
    }

}