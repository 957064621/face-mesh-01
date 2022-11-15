  
let img1;//胡子
let img2;//帽子
let img3;//眼睛1
let img4;//眼睛2
let img5;//口水
let img6;//稻草
let img8;//gif
let img7;//字
let img6width = 300;
  let koushui = -20;
    let koushui2 = -15;
     let koushui3 = 1.0;
  function setup(){

    createCanvas(800, 600);
    img1 = loadImage('assert/西瓜红晕1.png');//帽子
    img2 = loadImage('assert/西瓜红晕2.png');//胡子
    img3 = loadImage('assert/两小无猜.gif');//眼睛1
    img4 = loadImage('assert/西瓜鼻子.png');//眼睛2
    img5 = loadImage('assert/口水.png');//眼睛2
        img6 = loadImage('assert/稻草.png');//眼睛2
        img7 = loadImage('assert/字.png');//眼睛2
         img8 = loadImage('assert/树枝.gif');//眼睛2

    colorMode(HSB);

    stroke(255);
    strokeWeight(3);
  }

  function draw(){
    imageMode(CENTER);
    clear();
    if(detections != undefined){
      console.log(detections);
      if(detections.multiFaceLandmarks != undefined && detections.multiFaceLandmarks.length >= 1){
        //drawFaceMesh();
        
      funnyyanjing1();
       funnymaozi();
      
      // funnyyanjing2();
      funnyhuzi();
       shuzhi();
    
       // daocao();
        zi();
  
      }
    }
  }

  function drawFaceMesh(){
    stroke(255);
    strokeWeight(3);
    noFill();
    beginShape(POINTS);  



    for(let j=0; j<detections.multiFaceLandmarks[0].length; j++){
      let x = detections.multiFaceLandmarks[0][j].x * width;
      let y = detections.multiFaceLandmarks[0][j].y * height;

 

      vertex(x, y);
    }

    endShape();
  }

  function funnyhuzi(){
    let noseX = detections.multiFaceLandmarks[0][159].x * width;
    let noseY = detections.multiFaceLandmarks[0][159].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img1, noseX+50,noseY+80,500,500);//红晕
  }

  function funnymaozi(){
    let maoziX = detections.multiFaceLandmarks[0][386].x * width;
    let maoziY = detections.multiFaceLandmarks[0][386].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img2, maoziX, maoziY+90,500,500);//红晕
  }

  function funnyyanjing1(){
    let yanjing1X = detections.multiFaceLandmarks[0][9].x * width;
    let yanjing1Y = detections.multiFaceLandmarks[0][9].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img3, yanjing1X+23, yanjing1Y+70,650,300);//人
  }


  function funnyyanjing2(){
    let yanjing2X = detections.multiFaceLandmarks[0][19].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][19].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img4, yanjing2X+30, yanjing2Y,450,450);//胡须
  }



function yifu(){
   
    let yanjing2X = detections.multiFaceLandmarks[0][179].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][179].y * height;

    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img5, yanjing2X+30+koushui/2, yanjing2Y+koushui,800,800);//衣服
    koushui+=1;
    console.log(koushui);
    if (koushui>=18) {
     koushui=-20;
     
    }
  }
  function yifu2(){
   
    let yanjing2X = detections.multiFaceLandmarks[0][179].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][179].y * height;

    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img5, yanjing2X+30+koushui2/2, yanjing2Y+koushui2,800,800);//衣服

    koushui2+=1;
    console.log(koushui2);
    if (koushui2>=18) {
     koushui2=-15;
     
    }
  }

  function yifu3(){
   
    let yanjing2X = detections.multiFaceLandmarks[0][179].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][179].y * height;

    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img5, yanjing2X+30+koushui2/2, yanjing2Y+koushui3,800,800);//衣服

    koushui3+=1;
    if (koushui3>=18) {
     koushui3=-10;
     
    }
  }

    function daocao(){
   
    let yanjing2X = detections.multiFaceLandmarks[0][95].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][95].y * height;

    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
 //rotate(PI/koushui3,500);
    image(img6, yanjing2X+30, yanjing2Y,img6width,300);//衣服
     //image(img7, yanjing2X+30, yanjing2Y,300,300);//衣服
    
  // koushui3+=1.0;
 //if (koushui3>=15) {
  // koushui3=5.0;
  //}

   
  }

   function zi(){
   // console.log(img6width);
    if (img6width >200) {
       image(img7, 700,150,100,300);//果子2
    }
   
  }


  function shuzhi(){
 
    image(img8,300,250,600,600);//胡须
  }