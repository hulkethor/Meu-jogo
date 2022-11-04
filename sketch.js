var fant,doceG,almaG,alma2G,inimigoG,gameover;
var fantImg,doceI,almaI,alma2I,inimigoI,gameoverI;
var first=0;
var game=1;
var end=2;
var gameState=first;
var score;
var texto,text2;
function preload(){
    fantImg = loadAnimation("fantasma.png");
    doceI = loadImage("doce.png");
    almaI = loadImage("algo3.png");
    alma2I = loadImage("algo2.png");
    inimigoI = loadImage("faca.png");
    gameoverI=loadImage("gameover.png");
}

function setup() {
 createCanvas(600,600);
 fant=createSprite(300,300,50,50);
 fant.addAnimation("normal",fantImg);
 fant.scale=0.5;
 gameover = createSprite(300,300,50,50);
 gameover.addImage("gameover",gameoverI);
 gameover.scale=0.5;
 doceG=new Group();
 almaG=new Group();
 alma2G=new Group();
 inimigoG=new Group();
 score=0
}

function draw() {
 background(51);
 if (gameState===first){
    gameover.visible=false;
    fill("red");
    textSize(30);
    text("Aperte ENTER para começar",100,200);
    if (keyDown("ENTER")){
        gameState=game;
    }
 }
if (gameState===game){
    gameover.visible=false;
    fant.velocityY=fant.velocityY+0.4;
    if (keyDown("space") && fant.y>75){
        fant.velocityY=-8;
    }
    if (keyDown("right")&& fant.x<580){
        fant.x=fant.x+5;
    }
    if (keyDown("left")&& fant.x>20){
        fant.x=fant.x-5;
    }
    createobj();
    if (doceG.isTouching(fant)){
        score=score+3;
        doceG.destroyEach();
    }
    if (almaG.isTouching(fant)){
        score=score+2;
        almaG.destroyEach();
    }
    if (alma2G.isTouching(fant)){
        score=score-1;
        alma2G.destroyEach();
    }
    if (inimigoG.isTouching(fant)){
        gameState=end;
        inimigoG.destroyEach();
    }
    textSize(30);
    text("Score: " + score,50,50);
}
if (gameState===end){
    gameover.visible=true;
    fant.destroy();
    inimigoG.destroyEach();
    doceG.destroyEach();
    almaG.destroyEach();
    alma2G.destroyEach();
    textSize(30);
    text("Score: " + score,50,50);
}
drawSprites();
}
function createobj(){
    if (frameCount%80===0){
        var rand=Math.round(random(1,4))
        switch(rand){
            case 1: cdoce();
                    break;
            case 2: calma();
                    break;
            case 3: calma2();
                    break;
            case 4: cfaca();
                    break;
            default:break;
        }
    }
}
function cdoce(){
    var doce=createSprite(300,0,20,20);
    doce.addImage(doceI);
    doce.x=Math.round(random(20,580));
    doce.scale=0.2;
    doce.velocityY=5;
    doce.lifetime=500;
    doceG.add(doce);
}
function calma(){
    var alma=createSprite(300,0,20,20);
    alma.addImage(almaI);
    alma.x=Math.round(random(20,580));
    alma.scale=0.5;
    alma.velocityY=5;
    alma.lifetime=500;
    almaG.add(alma);
}
function calma2(){
    var alma2=createSprite(300,0,20,20);
    alma2.addImage(alma2I);
    alma2.x=Math.round(random(20,580));
    alma2.scale=0.2;
    alma2.velocityY=5;
    alma2.lifetime=500;
    alma2G.add(alma2);
}
function cfaca(){
    var inimigo=createSprite(300,0,20,20);
    inimigo.addImage(inimigoI);
    inimigo.x=Math.round(random(20,580));
    inimigo.scale=0.3;
    inimigo.velocityY=5;
    inimigo.lifetime=500;
    inimigoG.add(inimigo);
}