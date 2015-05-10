##EaselJS Module
EaseJS JavaScript 类库，提供一种保留的绘图模式，让Canvas有了一系列特性
1. 分层显示 
2. 核心交互模型
3. 一些核心的工具类，让使用Canvas进行2D绘图更简单
EaseJS 为复杂的图形应该和交互 ，提供了直接的解决方案

##来吧，开始吧
首先，用一个CANVAS 元素来初始化 Stage(舞台) ,显示对象(DisplayObject) 的实例，来做为其子元素, EaselJS 中支持下面的一些显示对象：

- Bitmap 来显示图像
- Shape 和 Graphics 来显示矢量图形
- SpriteShee 和 Sprite 来做位图的动画
- Text 来显示简单的文字
- Container 可以来做为其它显示对象(DisplayObject) 的容器 
- DOMElement 可以用来管理DOM元素

所有的显示对象，都可以做为舞台(Stage)的子元素，也可以直接绘制到 canvas上

##用户交互

当用户点击鼠标和触摸屏幕，所有在舞台上的显示对象(除 DOMElement) 都可以用来分发事件。EaseJS 支持 悬浮(hover),按压(press),还有 释放(release) 事件，同时也提供了一个比较好用的拖拽模型，细节参见 MouseEvent 部分

##小例子
这个小例子，演示了怎么在舞台上创建一个形状和给他定位 
```js
stage = new createjs.Stage('demoCanvas');`

circle = new createjs.Shape();
circle.graphics.beginFill('red').drawCircle(0, 0, 40);
circle.x = circle.y = 50;

stage.addChild(circle);
stage.update();

```