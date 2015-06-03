var stage = new createjs.Stage('demoCanvas');
var shape = new createjs.Shape().set({x:100,y:100});
shape.graphics.beginFill('#ff0000').drawCircle(0,0,50);


shape.filters = [
	new createjs.ColorFilter(0,0,0,1, 115,200,255,0)
];

shape.cache(-50, -50, 100, 100);

stage.addChild(shape);
stage.update()