class Particle {  
    constructor(x, y) {  
      this.x = x;  
      this.y = y;  
      this.vx = random(-5, 5);  
      this.vy = random(-5, -1);  
      this.alpha = 255;  
    }  
  
    finished() {  
      return this.alpha <= 0;  
    }  
  
    update() {  
      this.x += this.vx;  
      this.y += this.vy;  
      this.alpha -= 5;  
    }  
  
    show() {  
      noStroke();  
      fill(255, 0, 0, this.alpha); // Red particles for visibility  
      ellipse(this.x, this.y, 16, 16);  
    }  
  }  
  
  function createParticles(x, y) {  
      
    for (let i = 0; i < 10; i++) {  
      let p = new Particle(x, y);  
      particles.push(p);  
    }  
  }  


