class Cylinder extends threedshape {
    constructor(x, y, speedX, speedY, radius, height, lateral = false) {
      super(x, y, speedX, speedY);
      this.radius = radius;
      this.height = height;
      this.lateral = lateral; 
    }
  
    draw() {
      push();
      super.moveShape();
      noStroke();
      normalMaterial(0,0,0);
  
      if (this.lateral) {
        rotateZ(HALF_PI); 
        
      }
  
      cylinder(this.radius, this.height);
      pop();
    }
  }