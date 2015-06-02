var stage = new createjs.Stage('demoCanvas');
var shape = new createjs.Shape().set({x:100,y:100});

shape.graphics.beginFill('#ff0000').drawCircle(0,0,50);

var blurFilter = new createjs.BlurFilter(5, 5, 1);
shape.filters = [blurFilter];

var bounds = blurFilter.getBounds();

shape.cache(-50+bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);

stage.addChild(shape);
stage.update();