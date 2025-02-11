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


var saucex = 200; 
var saucey = 200; 


var cheesex = 200; 
var cheesey = 200;  
var cheesespeed = 2; 


var breadx = 200;
var bready = 200;


var chillerImage1;
var chillerImage2;
var chillerImage3;


var myFont;
var chillerX1 = 50;
var chillerX2 = 100;
var chillerX3 = 150;


var timerValue = 10;


function preload() { 
   chillerImage1 = loadImage("images/DALL·E 2025-02-10 16.19.41 - A capybara wearing tiny sunglasses and a hoodie, sitting in a gaming chair with RGB lights, holding a bubble tea in one hand and a gaming controller i.webp");
   chillerImage2 = loadImage("images/sharkhorse.jpg");
   chillerImage3 = loadImage("images/minion-FB.webp");
   myFont = loadFont("fonts/Cinzel-VariableFont_wght.ttf")
}


function setup() { 
   createCanvas(400, 400);
   setInterval(timeIt, 1000);  
} 


function draw() { 
   background(210, 180, 140); 


   textSize(15); 
   text('TRY TO LINE UP THE PIZZA', 20, 30);
   textSize(30);
   textFont(myFont);
   text('Miles', 300, 370); 


   fill(181, 101, 29); // Crust  
   circle(breadx, bready, 300);  


   fill(255, 0, 0); // Sauce 
   circle(saucex, saucey, 250);  


   fill(255, 255, 0); // Cheese 
   circle(cheesex, cheesey, 230); 
  
   fill(255, 100, 0);
   noStroke(); 
   circle(pep1x, pep1y, 30); 
   circle(pep2x, pep2y, 30); 
   circle(pep3x, pep3y, 30); 
   circle(pep4x, pep4y, 30); 
   circle(pep5x, pep5y, 30); 
   circle(pep6x, pep6y, 30); 


   stroke(0);  
   line(200, 350, 200, 50);  
   line(350, 200, 50, 200); 


   // Right 
   if (keyIsDown(68)) { 
       movePepperonisX(2);  
   } 
   // Down 
   if (keyIsDown(83)) {  
       movePepperonisY(2); 
   }  
   // Left 
   if (keyIsDown(65)) {  
       movePepperonisX(-2); 
   } 
   // Up  
   if (keyIsDown(87)) {  
       movePepperonisY(-2); 
   } 
   // Space  
   if (keyIsDown(32)) { 
       moveSauceBreadAndCheeseRandomly(); 
   } 


   if (timerValue <= 0) {
       chillerX1 += 2;
       chillerX2 += 2;
       chillerX3 += 2;
   }


   image(chillerImage1, chillerX1, 100, 50, 100);
   image(chillerImage2, chillerX2, 200, 70, 100);
   image(chillerImage3, chillerX3, 300, 100, 100);
}


function timeIt() {
   if (timerValue > 0) {
       timerValue--;
   }
} 


function movePepperonisX(amount) { 
   pep1x += amount; 
   pep2x += amount; 
   pep3x += amount; 
   pep4x += amount; 
   pep5x += amount; 
   pep6x += amount; 
} 


function movePepperonisY(amount) { 
   pep1y += amount; 
   pep2y += amount; 
   pep3y += amount; 
   pep4y += amount; 
   pep5y += amount; 
   pep6y += amount; 
} 


function moveSauceBreadAndCheeseRandomly() { 
   saucex = random(50, 350); 
   saucey = random(50, 350); 


   breadx = random(50, 350); 
   bready = random(50, 350); 


   cheesex = random(50, 350); 
   cheesey = random(50, 350); 
}
