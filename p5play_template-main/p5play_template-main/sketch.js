var catWalk, sebWalk, youWin, person_walking_right, catLick

var gameState = 1

function preload() {
    cat_licking = loadAnimation("animations/cat licking animation/a1.png", "animations/cat licking animation/a2.png", "animations/cat licking animation/a3.png");

    cat_walking = loadAnimation("animations/cat walking animation/c1.png", "animations/cat walking animation/c2.png");

    //a key
    person_walking = loadAnimation("animations/person walking animation/b1.png", "animations/person walking animation/b2.png",
        "animations/person walking animation/b3.png", "animations/person walking animation/b4.png");


    //q key
    PickUp_cat = loadAnimation("animations/picking up cat animation/d1.png", "animations/picking up cat animation/d2.png", "animations/picking up cat animation/d3.png",
        "animations/picking up cat animation/d4.png", "animations/picking up cat animation/d5.png", "animations/picking up cat animation/d6.png",
        "animations/picking up cat animation/d7.png", "animations/picking up cat animation/d8.png", "animations/picking up cat animation/d9.png");

    you_win = loadImage("animations/Win animation/12.png")

    //no key being pressed
    sebBaseImg = loadAnimation("e1.png");

    //d key
    person_walking_right = loadAnimation("animations/person walking right/f1.png", "animations/person walking right/f2.png",
        "animations/person walking right/f3.png", "animations/person walking right/f4.png");

    // spaggaethi mode, cat2 

}

function setup() {
    createCanvas(1879, 900);

    // sehWalkR = createSprite(5)


    catLick = createSprite(1000, 820);
    catLick.addAnimation("licking", cat_licking);
    catLick.scale = 0.31
    //catLick.setCollider("square",0,0)
    catLick.debug = true



    catWalk = createSprite(200, 811, 18, 85);
    catWalk.addAnimation("walking", cat_walking)
    //catWalk.addAnimation("catLicking", cat_licking);

    catWalk.debug = true
    catWalk.setCollider("rectangle", 150, 0, 400, 400)
    catWalk.scale = 0.25;

    // seb = createSprite(1500,680,200,250);
    // seb.scale = 0.19;



    sebWalk = createSprite(500, 680);
    sebWalk.addAnimation("base_stand", sebBaseImg);
    sebBaseImg.scale = 0.25;

    sebWalk.addAnimation("person_walking", person_walking);
    sebWalk.addAnimation("person_walking_right", person_walking_right);
    sebWalk.addAnimation("pickUp", PickUp_cat);

    sebWalk.debug = true
    sebWalk.setCollider("rectangle", 80, 0, 180, 400)

    sebWalk.scale = 0.189;


    edges = createEdgeSprites()

}

function draw() {
    background("gray")

    if (keyDown("d")) {

        sebWalk.x = sebWalk.x + 5
        sebWalk.changeAnimation("person_walking_right")

        sebWalk.scale = 0.25

        sebWalk.setCollider("rectangle", -300, 0, 600, 1200)
    }



    if (keyDown("a")) {

        // sebWalk.velocityX = -5;

        sebWalk.x = sebWalk.x - 5


        //sebWalk.changeAnimation("person_walking");
        //sebWalk.scale = 0.26;

        sebWalk.changeAnimation("person_walking");


        sebWalk.setCollider("rectangle", -300, 0, 600, 1200)

    };

    if (keyDown("q") && sebWalk.isTouching(catLick)) {
        catLick.remove()
        //catWalk.remove()
        sebWalk.changeAnimation("pickUp")
        sebWalk.scale = 0.25

        //gameState = 2
    }


    if (keyDown('q') && sebWalk.isTouching(catWalk)) {
        catWalk.remove()
        sebWalk.changeAnimation("pickUp")
        sebWalk.scale = 0.25;
        // gameState = 2

        setTimeout(() => {
            gameState = 2
        }, 2000)

    }

    // if (catLick.remove() && catWalk.remove()) {
    //     gameState = 2
    // }

    if (gameState == 2) {
        gameOver()
    }

    catWalk.bounceOff(edges)
    sebWalk.bounceOff(edges)

    drawSprites()

}

function gameOver() {
    // background("white")

    // youWin.visible = true
    // youWin = createSprite(950, 500);
    // youWin.addImage( you_win);
    // youWin.scale = 0.85;

    image(you_win, 0, 0, width, height);


    // console.log("done")
    sebWalk.destroy()
    catWalk.destroy()
    catLick.destroy()
}