var pep1x = 150;
var pep1y = 150;

var pep2x = 250;  
var pep2y = 150;  

var pep3x = 150;  
var pep3y = 250;  

var pep4x = 250;  
var pep4y = 250;  

var pep5x = 200;  
var pep5y = 100;  

var pep6x = 200;  
var pep6y = 300; 



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
function keyPressed() {  
    if (key === 'd') {  
        movePepperonisX(5);   
    }  
    if (key === 'w') {  
        movePepperonisY(5); 
    }  
}  

function movePepperonisX(amount) {  
    // Move all pepperonis horizontally  
    pep1x += amount;  
    pep2x += amount;  
    pep3x += amount;  
    pep4x += amount;  
    pep5x += amount;  
    pep6x += amount;  
}  

function movePepperonisY(amount) {  
    // Move all pepperonis vertically  
    pep1y += amount;  
    pep2y += amount;  
    pep3y += amount;  
    pep4y += amount;  
    pep5y += amount;  
    pep6y += amount;  
}  
