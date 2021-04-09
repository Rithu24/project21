var canvas;
var s1,s2,s3,s4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    s1 = createSprite(0,580,360,30);
    s1.shapeColor = "blue";

    s2 = createSprite(295,580,200,30);
    s2.shapeColor = "orange";

    s3 = createSprite(515,580,200,30);
   s3.shapeColor = "red";

    s4 = createSprite(740,580,220,30);
    s4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(s1.isTouching(ball) && ball.bounceOff(s1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(s2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(s3.isTouching(ball) && ball.bounceOff(s3)){
        ball.shapeColor = "red";
    }

    if(s4.isTouching(ball) && ball.bounceOff(s4)){
        ball.shapeColor = "green";
    }

    drawSprites();
}

