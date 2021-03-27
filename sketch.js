var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
ball = createSprite(400,300,20,20)
sur = createSprite(70,590,200,20)
sur.shapeColor = "darkgreen"
sur2 = createSprite(280,590,200,20)
sur2.shapeColor = "orange"
sur3 = createSprite(490,590,200,20)
sur3.shapeColor = "pink"
sur4 = createSprite(700,590,200,20)
sur4.shapeColor = "yellow"
ball.velocityX = random(-6,6);
ball.velocityY = random(-6,6)

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
if(ball.isTouching(sur)) {
    ball.shapeColor = "darkgreen"
    music.play();
}
if(ball.isTouching(sur2)) {
    ball.shapeColor = "orange"
   ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
}
if(ball.isTouching(sur3)) {
    ball.shapeColor = "pink"
    music.play();
}
if(ball.isTouching(sur4)) {
    ball.shapeColor = "yellow"
    music.play();
}

    //add condition to check if box touching surface and make it box
    edges = createEdgeSprites()
    ball.bounceOff(edges)
    ball.bounceOff(sur)
    ball.bounceOff(sur2)
    ball.bounceOff(sur3)
    ball.bounceOff(sur4)
    drawSprites();
}
