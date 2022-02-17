function setup() {
  // put setup code here
  createCanvas(400, 200);
  j=0
  
}

function draw() {
  // put drawing code here
  background(243,234,219)
  
  
  line(200,0,200,200)
  line(0,150, 400,150)
  line(140,100,140,70)
  line(350,100,350,70)

  fill(255,192,203)
  triangle(50, 120, 110, 120, 60, 95) 
  triangle(250, 120, 310, 120, 260, 95) 
  rect(250, 120, 60, 30)
  rect(50, 120, 60, 30)

  fill(248, 0, 71)
  triangle (75, 80, 77, 60, 80,80)
  triangle (280, 80, 277, 60, 275,80)
  ellipse(65, 100, 15 , 15)
  ellipse(265, 100, 15 , 15)

  fill(245,222,179)
  rect(50, 125, 60, 20)
  rect(250,125, 60, 20)
  
  fill(255,182,193)
  arc(55, 125, 10, 10, radians (0), radians(180))
  arc(65, 125, 10, 10, radians (0), radians(180))
  arc(75, 125, 10, 10, radians (0), radians(180))
  arc(85, 125, 10, 10, radians (0), radians(180))
  arc(95, 125, 10, 10, radians (0), radians(180))
  arc(105, 125, 10, 10, radians (0), radians(180))
  arc(255, 125, 10, 10, radians (0), radians(180))
  arc(265, 125, 10, 10, radians (0), radians(180))
  arc(275, 125, 10, 10, radians (0), radians(180))
  arc(285, 125, 10, 10, radians (0), radians(180))
  arc(295, 125, 10, 10, radians (0), radians(180))
  arc(305, 125, 10, 10, radians (0), radians(180))
  
  fill(243,234,219)
  arc(60,92, 15, 15, radians(180), radians(0))
  arc(260,92, 15, 15, radians(180), radians(0))
  
  fill(255,248,220)
  rect(275, 80, 5, 30)
  rect(75, 80, 5, 30)
  
  fill(248, 0, 71)
  var y = 50+ 20*Math.sin(j/100);
  j+=5;
  triangle (280, 80, 277, y, 275,80)

  fill(186,255,201)
  ellipse(140,40, 30,50)
  triangle(135, 70, 140, 65, 145,70)
  fill(255,255,186)
  ellipse(350, 40, 30,50)
  triangle(355, 70, 350, 65, 345,70)

  


  

  




}

