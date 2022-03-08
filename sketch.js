var count = 0;
var gameState = "start",logo,playbutton,playbuttonImg,infobutton,infobuttonImg;
var backimg,level1img,level2img,level3img,level1board,level1boardImg,fruitboard,fruitboardImg,coinboard,coinboardImg;
var diamondboard,diamondboardImg;
var brick1,brick1Img,brick2,brick2Img,brick3,brick3Img,brick4,brick4Img,brick5,brick5Img,brick5,brick5Img,brick6,brick6Img,brick7,brick7Img;
var playerImg1,playerImg2,playerImg3;
var diamond1,diamond2,diamond3,diamond4,diamond4,diamond5,diamond6,diamond7,diamond8,diamond9,diamond10,diamondImg;
var snake1,snake2,snakeImg,gameover,youwon,howtoplay;
var invisibleground,diamondcount=0;
var heart1;
var heart2;
var heart3,lives=3;
var diamondgroup,buttonclick;
function preload(){
 
  logoimg = loadImage("images/LOGO.png");
  playbuttonImg = loadImage("images/button.png");
  backimg=loadImage("images/3.jpg")
  infobuttonImg = loadImage("images/infobutton1.png");
  level1img = loadImage("images/images.jpg");
  level1boardImg = loadImage("images/level1.png");
  fruitboardImg = loadImage("images/fruitboard.png");
  coinboardImg = loadImage("images/coinboard.png");
  diamondboardImg = loadImage("images/diamondboard.png");
  brick1Img = loadImage("images/brick2.png");
  brick2Img = loadImage("images/brick2.png");
  brick3Img = loadImage("images/brick2.png");
  brick4Img = loadImage("images/brick2.png");
  brick5Img = loadImage("images/brick2.png");
  brick6Img = loadImage("images/brick2.png");
  brick7Img = loadImage("images/brick2.png");
  diamondImg = loadImage("images/diamond.gif");
  heartimg=loadImage("images/heart.png");
  snakeImg = loadImage("images/snake.png");
  playerImg1 = loadAnimation('png/Idle (1).png','png/Idle (2).png','png/Idle (3).png','png/Idle (4).png','png/Idle (5).png','png/Idle (6).png','png/Idle (7).png','png/Idle (8).png','png/Idle (9).png','png/Idle (10).png');
  playerImg2=loadAnimation('png/Jump (1).png','png/Jump (2).png','png/Jump (3).png','png/Jump (4).png','png/Jump (5).png','png/Jump (6).png','png/Jump (7).png','png/Jump (8).png','png/Jump (9).png','png/Jump (10).png');
  playerImg3 = loadAnimation('png/Dead (1).png','png/Dead (2).png','png/Dead (3).png','png/Dead (4).png','png/Dead (5).png','png/Dead (6).png','png/Dead (7).png','png/Dead (8).png','png/Dead (9).png','png/Dead (10).png')
//jumpimg=loadAnimation("png/Jum")
greyimg=loadImage("images/grey.png")
gameoverimg=loadImage("images/1.png")
youwonimg=loadImage("images/you won the game.png")
howtoplayimg=loadImage("images/howtoplay.png")

snakem=loadSound("sound/snake.mp3");
diamondm=loadSound("sound/diamond.mp3");
jumpm=loadSound("sound/jump.mp3");
popm=loadSound("sound/pop.mp3");
playm=loadSound("sound/play.mp3");

}


function setup(){
  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites();
  
  invisibleground = createSprite(width/2,height+5,width,2);
  invisibleground.visible = false;

  logo = createSprite(width/2,height/2);
  logo.addImage(logoimg);
  logo.visible = false;

  playbutton = createSprite(width/2,height/2+230);
  playbutton.addImage(playbuttonImg);
  playbutton.scale = 0.4;

  infobutton = createSprite(width-50,height-60);
  infobutton.addImage(infobuttonImg);
  infobutton.scale = 0.7;

  level1board = createSprite(windowWidth/2,50);
  level1board.addImage(level1boardImg);
  level1board.scale=0.19 ;

  fruitboard = createSprite(200,70);
  fruitboard.addImage(fruitboardImg);
  fruitboard.scale = 0.25;

  coinboard = createSprite(200,70);
  coinboard.addImage(coinboardImg);
  coinboard.scale = 0.25;

  diamondboard = createSprite(200,70);
  diamondboard.addImage(diamondboardImg);
  diamondboard.scale = 0.25;

  brick1 = createSprite(width-450,height-50);
  brick1.addImage(brick1Img);
  brick1.scale = 0.5;

  brick2 = createSprite(360,height-50);
  brick2.addImage(brick2Img);
  brick2.scale = 0.5;  

  brick3 = createSprite(width/2+120,height/2-75);
  brick3.addImage(brick3Img);
  brick3.scale = 0.5;

  brick4 = createSprite(width/2+480,height-500);
  brick4.addImage(brick4Img);
  brick4.scale = 0.5;

  brick5 = createSprite(width-120,height/2+100);
  brick5.addImage(brick5Img);
  brick5.scale = 0.5;

  brick6 = createSprite(width-920,height/2+40);
  brick6.addImage(brick5Img);
  brick6.scale = 0.5;

  brick7 = createSprite(50,height-390);
  brick7.addImage(brick7Img);
  brick7.scale = 0.5;

  heart1 = createSprite(width-150, 20);
  heart1.addImage(heartimg);
  heart1.scale = 0.07;

  heart2 = createSprite(width-100, 20);
  heart2.addImage(heartimg);
  heart2.scale = 0.07;

  heart3 = createSprite(width-50, 20);
  heart3.addImage(heartimg);
  heart3.scale = 0.07;

  player = createSprite(windowWidth/2-630,windowHeight-300);
  player.addAnimation("standing",playerImg1);
  player.addAnimation("jumping",playerImg2);
  player.addAnimation("dead",playerImg3);
  player.scale =0.23;
  player.visible = false;

  diamondgroup = new Group();
  diamonds();


  snake1 = createSprite(windowWidth/2-95,windowHeight-120);
  snake1.addImage(snakeImg);
  snake1.scale = 0.3;
  
  snake2 = createSprite(windowWidth/2-260,windowHeight-550);
  snake2.addImage(snakeImg);
  snake2.scale = 0.3;
  //snake2.debug="true";
 
  snake3 = createSprite(windowWidth/2+70,windowHeight-290); 
  snake3.addImage(snakeImg);
  snake3.scale = 0.3;

  snake4 = createSprite(windowWidth/2+460,windowHeight-470);
  snake4.addImage(snakeImg);
  snake4.scale = 0.3;
  //snake4.debug="true";
  howtoplay=createSprite(750,390,10,10);
  howtoplay.addImage(howtoplayimg);
  howtoplay.scale=0.3;

  brick1.setCollider("rectangle",10,-4,brick1.width,200)
  brick2.setCollider("rectangle",10,-4,brick2.width,200)
  brick3.setCollider("rectangle",10,-4,brick3.width,200)
  brick4.setCollider("rectangle",10,-4,brick4.width,200)
  brick5.setCollider("rectangle",10,-4,brick4.width,200)
  brick6.setCollider("rectangle",10,-4,brick4.width,200)
  brick7.setCollider("rectangle",10,-4,brick7.width,200);
  player.setCollider("rectangle",0,0,250,player.height-30);
  snake2.setCollider("rectangle",10,-4,snake2.width-200,300)
  snake4.setCollider("rectangle",10,-4,snake4.width-300,350)
  howtoplay.setCollider("rectangle",400,-580,200,200)
 // player.debug="true";
  /*brick4.debug="true";
  brick5.debug="true";
  brick6.debug="true";
  brick7.debug="true";*/

  level1();
}


function draw() {
  if(gameState==="start")
  {
    background(backimg);
    logo.visible = true;
    playbutton.visible = true;
    infobutton.visible = true;
    howtoplay.visible=false;
    if(mousePressedOver(playbutton))

    {
      playm.play();
      gameState="level1";
    
      player.x =  windowWidth/2-630;
      player.y = windowHeight-300;
          
      playbutton.visible=false;
      logo.visible = false;
      diamondboard.visible = true;
      level1board.visible = true;

    }
  if(mousePressedOver(infobutton)){
    howtoplay.visible=true;
    popm.play();
  }
  if(mousePressedOver(howtoplay))
  {
    howtoplay.visible=false;
  }
  }

  else if(gameState==="level1")
  {
    background(level1img);
    
    player.visible = true;
    brick1.visible = true;
    brick2.visible = true;
    brick3.visible = true;
    brick4.visible = true;
    brick5.visible = true;
    brick6.visible = true;
    brick7.visible = true;
    diamond1.visible = true;
    diamond2.visible = true;
    diamond3.visible = true;
    diamond4.visible = true;
    diamond5.visible = true;
    diamond6.visible = true;
    diamond7.visible = true;
    diamond8.visible = true;
    diamond9.visible = true;
    diamond10.visible = true;
    snake1.visible = true;
    snake2.visible = true;
    snake3.visible = true;
    snake4.visible = true;
    infobutton.visible=false;
    heart1.visible=true;
    heart2.visible=true;
    heart3.visible=true;
    diamondboard.visible = true;
    level1board.visible = true;
    howtoplay.visible=false;
    player.velocityY = player.velocityY+1;
    player.collide(invisibleground);
    player.collide(brick1);
    player.collide(brick2);
    player.collide(brick3);
    player.collide(brick4);
    player.collide(brick5);
    player.collide(brick6);
    player.collide(brick7);
  
    if(keyDown("up_arrow"))
    {
    //jumpm.play();
    player.velocityY = -12;
    player.changeAnimation("jumping",playerImg2);
    }
    if(keyDown("right_arrow"))
    {
     // jumpm.play();
     player.changeAnimation("standing",playerImg1);
    player.x = player.x +4;
    }
    if(keyDown("left_arrow"))
    {
     // jumpm.play();
    player.changeAnimation("jumping",playerImg1);
    player.x = player.x-3;
    }
    if(keyDown("down_arrow"))
    {
    //jumpm.play();
    player.velocityY = 12;
    player.changeAnimation("jumping",playerImg2);
    }
    if(player.isTouching(diamond1))
    {
    diamondm.play();
    diamondcount+=1;
    diamond1.destroy();
    }
    if(player.isTouching(diamond2))
    {
    diamondm.play();
    diamondcount+=1;
    diamond2.destroy();

    }
    if(player.isTouching(diamond3))
    {
    diamondm.play();
    diamondcount+=1;
    diamond3.destroy();
    }
    if(player.isTouching(diamond4))
    {
    diamondm.play();
    diamondcount+=1;
    diamond4.destroy();
    }
    if (player.isTouching(diamond5))
    {
    diamondm.play();
    diamondcount+=1;
    diamond5.destroy();
    }
    if(player.isTouching(diamond6))
    {
      diamondm.play();
    diamondcount+=1;
    diamond6.destroy();
    }
    if(player.isTouching(diamond7))
    {
      diamondm.play();
    diamondcount+=1;
    diamond7.destroy();
    }
    if(player.isTouching(diamond8))
    {
      diamondm.play();
    diamondcount+=1;
    diamond8.destroy();
    }
    if(player.isTouching(diamond9))
    {
      diamondm.play();
    diamondcount+=1;
    diamond9.destroy();
    }
    if(player.isTouching(diamond10))
    {
      diamondm.play();
    diamondcount+=1;
    diamond10.destroy();

    }
    if(diamondcount===10){

      youwon=createSprite(700,350,10,10)
      youwon.addImage(youwonimg);
      youwon.scale=1.5;
      
    }

    if(
    player.isTouching(snake1)||
    player.isTouching(snake2)||
    player.isTouching(snake3)||
    player.isTouching(snake4))
    {
      snakem.play();
      lives=lives-1;
      player.x=20;
      player.y=600;
      if(lives===2)
      {
        heart1.addImage(greyimg);
        heart1.scale=0.18;
      }
      if(lives===1)
      {
        heart2.addImage(greyimg);
        heart2.scale=0.18;
      }
    if(lives===0)
    {
      gameState="end";
      heart3.addImage(greyimg);
      heart3.scale=0.18;
      
      
    }
    
    
  }
    
  }
  else if(gameState==="end"){
    background(level1img);
    gameover=createSprite(windowWidth/2-10, windowHeight-350);
    gameover.addImage(gameoverimg);
    gameover.scale=1.5;
    player.changeAnimation("dead",playerImg3)
      if(mousePressedOver(gameover))
      {
        
        gameState="level1";
        player.x =  windowWidth/2-630;
        player.y = windowHeight-300;
        gameover.visible = false;
        level1();
        diamonds();
        diamondcount=0;
        lives=3;
        heart1.addImage(heartimg);
        heart2.addImage(heartimg);
        heart3.addImage(heartimg);
        heart1.scale=0.07;
        heart2.scale=0.07;
        heart3.scale=0.07; 
      }
  }
  else if(gameState==="win")
 {
  background(level1img); 
  youwon.visible = true;
  if(mousePressedOver(gamewin))
  {
  
  gameState="start";
  youwon.visible = false;
  level1();
  diamonds();
  diamondcount=0;
  lives=3;
  heart1.addImage(heartimg);
  heart2.addImage(heartimg);
  heart3.addImage(heartimg);
  heart1.scale=0.07;
  heart2.scale=0.07;
  heart3.scale=0.07;
  }
}

 //console.log(lives);
  /*if (
    player.isTouching(brick1)||
    player.isTouching(brick2)||
    player.isTouching(brick3)||
    player.isTouching(brick4)||
    player.isTouching(brick5)||
    player.isTouching(brick6)||
    player.isTouching(brick7)){
      heart2.destroy();
    }
 if (
      player.isTouching(brick1)||
      player.isTouching(brick2)||
      player.isTouching(brick3)||
      player.isTouching(brick4)||
      player.isTouching(brick5)||
      player.isTouching(brick6)||
      player.isTouching(brick7)){
        heart3.addImage(greyimg);
      }*/

  drawSprites();

  if(gameState==="level1")
  {
    textSize(45);
    fill("white")
    text(diamondcount,diamondboard.x-10,diamondboard.y+30)
  }
}
function level1()
{
  fruitboard.visible = false;
  coinboard.visible = false;
  diamondboard.visible = false;
  level1board.visible = false;
  playbutton.visible = false;
  infobutton.visible = false;
  player.visible = false;
  brick1.visible = false;
  brick2.visible = false;
  brick3.visible = false;
  brick4.visible = false;
  brick5.visible = false;
  brick6.visible = false;
  brick7.visible = false;
  diamond1.visible = false;
  diamond2.visible = false;
  diamond3.visible = false;
  diamond4.visible = false;
  diamond5.visible = false;
  diamond6.visible = false;
  diamond7.visible = false;
  diamond8.visible = false;
  diamond9.visible = false;
  diamond10.visible = false;
  snake1.visible = false;
  snake2.visible = false;  
  snake3.visible = false;
  snake4.visible = false;
  heart1.visible=false;
  heart2.visible=false;
  heart3.visible=false;
}
function diamonds()
{
  diamond1 = createSprite(windowWidth/2+5,windowHeight-500);
  diamond1.addImage(diamondImg);
  diamond1.scale = 0.2;
  diamondgroup.add(diamond1);
  
  diamond2 = createSprite(windowWidth/2-330,windowHeight-400);
  diamond2.addImage(diamondImg);
  diamond2.scale = 0.2;
  diamondgroup.add(diamond2);

  diamond3 = createSprite(windowWidth/2+650,windowHeight-350);
  diamond3.addImage(diamondImg);
  diamond3.scale = 0.2;
  diamondgroup.add(diamond3);

  diamond4 = createSprite(windowWidth/2+450,windowHeight-350);
  diamond4.addImage(diamondImg);
  diamond4.scale = 0.2;
  diamondgroup.add(diamond4);

  diamond5 = createSprite(windowWidth/2-120,windowHeight-400);
  diamond5.addImage(diamondImg);
  diamond5.scale = 0.2;
  diamondgroup.add(diamond5);

  diamond6 = createSprite(windowWidth/2-200,windowHeight-180);
  diamond6.addImage(diamondImg);
  diamond6.scale = 0.2;
  diamondgroup.add(diamond6);

  diamond7 = createSprite(windowWidth/2-350,windowHeight-180);
  diamond7.addImage(diamondImg);
  diamond7.scale = 0.2;
  diamondgroup.add(diamond7);

  diamond8 = createSprite(windowWidth/2+120,windowHeight-150);
  diamond8.addImage(diamondImg);
  diamond8.scale = 0.2;
  diamondgroup.add(diamond8);

  diamond9 = createSprite(windowWidth/2+320,windowHeight-150);
  diamond9.addImage(diamondImg);
  diamond9.scale = 0.2;
  diamondgroup.add(diamond9);

  diamond10 = createSprite(windowWidth/2+200,windowHeight-500);
  diamond10.addImage(diamondImg);
  diamond10.scale = 0.2;
  diamondgroup.add(diamond10);
  diamond1.visible = false;
  diamond2.visible = false;
  diamond3.visible = false;
  diamond4.visible = false;
  diamond5.visible = false;
  diamond6.visible = false;
  diamond7.visible = false;
  diamond8.visible = false;
  diamond9.visible = false;
  diamond10.visible = false;
}