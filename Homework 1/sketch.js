function setup() {  
    createCanvas(400, 400);  
}  
function draw() {  
    background(210, 180, 140); 
    

    fill(181, 101, 29); // Crust 
    circle(200, 200, 300);   

    fill(255, 0, 0); //sauce  
    circle(200, 200, 250); 

    fill(255, 255, 0); // cheese  
    circle(200, 200, 230); 
    
    fill(400, 100, 0); //pepperonis  
    noStroke();  
    circle(150, 150, 30);  
    circle(250, 150, 30);  
    circle(150, 250, 30);  
    circle(250, 250, 30);   
    circle(200, 100, 30);  
    circle(200, 300, 30);  

    stroke(0); 
    line(200, 350, 200, 50);   
    line(350, 200, 50, 200);   
}  