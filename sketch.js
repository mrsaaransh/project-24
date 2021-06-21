
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2, base;
var side1Body, side2Body, baseBody;
var paperBall, ground, paperBody;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	paperBall = createSprite(100, 640, 50, 50)
	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = createSprite(500, 610, 20, 100)
	side1.shapeColor = "red"
	base = createSprite(600, 650, 200, 20)
	base.shapeColor = "red"
	side2 = createSprite(700, 610, 20, 100)
	side2.shapeColor = "red"

	Engine.run(engine);

	side1Body = Bodies.rectangle(300, 610, 20, 100, { isStatic: true })
	World.add(world, side1Body)
	baseBody = Bodies.rectangle(400, 650, 200, 20, { isStatic: true })
	World.add(world, baseBody)
	side2Body = Bodies.rectangle(300, 610, 20, 100, { isStatic: true })
	World.add(world, side2Body)

	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	paperBody = Bodies.circle(100, 640, 50, { restitution: 1, isStatic: true });
	World.add(world, paperBody);

}


function draw() {
	rectMode(CENTER);
	background(0);
	paperBall.x = paperBody.position.x
	paperBall.y = paperBody.position.y
	drawSprites();

}
function keyPressed() {
	if (keyCode === space) {
		Matter.Body.applyForce(paperBody.Body, paperBody.body.Body.position, { x: 85, y: -85 })
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.


	}
}




