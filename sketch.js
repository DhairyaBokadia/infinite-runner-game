
var ball;
var background_image
var background_sprite

function preload() {
    background_image=loadImage("background.jpg")
}

function setup(){
    createCanvas(500,500);
    background_sprite = createSprite(250,250,500,500)
    background_sprite.addImage(background_image)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.velocityX=2
}

function draw(){
    background("lightblue");
    camera.position.x=ball.x
    drawSprites();
}
