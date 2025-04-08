let shapes = [];

function preload() {
    concreteTexture = loadImage('assets/Concrete036_1K-JPG_Roughness.jpg'); }

function setup() {
    createCanvas(800, 800, WEBGL);
    let title = createDiv("POWER CORE");
    title.style("font-size", "24px");
    title.style("font-weight", "bold");
    title.style("text-align", "center");
    title.style("color", "white");
    title.position(50,50); 

    shapes.push(new Box(0, 0, 0.02, 0.06, 300, 300));
    shapes.push(new Sphere(0, 0, 0.02, 0.3, 200, 20));
    let cylinder1 = new Cylinder(0, 0, 0.07, 0.06, 185, 185);
    let cylinder2 = new Cylinder(0, 0, 0.1, 0.1, 185, 185, true);

    shapes.push(cylinder1);
    shapes.push(cylinder2);
  
    let cone1 = new Cone(0, 0, 0.02, 0.0005, 200, 1000);       
    let cone2 = new Cone(0, 0, 0.02, 0.0005, 200, 1000, true);  
  
    shapes.push(cone1);
    shapes.push(cone2);
    shapes.push(cylinder1);
    shapes.push(cylinder2);
  }

function draw() {
  background(0, 0, 0);
  background(0);

 
  ambientLight(150); 
  directionalLight(255, 255, 255, 0, -1, -1);

 
  for (let shape of shapes) {
    shape.draw();
  }
}