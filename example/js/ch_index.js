var stage = new createjs.Stage('demoCanvas');

// Create a Shape DisplayObject.
circle = new createjs.Shape();
circle.graphics.beginFill('#89ac33').drawCircle(0,0, 40);

// Set position of Shape instance.
circle.x = circle.y = 50;

// Add Shape instance to stage diaplsy list.
stage.addChild(circle);

// Update stage will render next frame
stage.update();

createjs.Ticker.addEventListener('tick', handleTick);

function handleTick() {
    circle.x += 10;
    if (circle.x > stage.canvas.width) {circle.x = 0;}
    stage.update();
}