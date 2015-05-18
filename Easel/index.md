##EaselJS Module
EaseJS JavaScript 类库，提供一种保留的绘图模式，让Canvas有了一系列特性

1. 分层显示 
1. 核心交互模型
1. 一些核心的工具类，让使用Canvas进行2D绘图更简单

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
stage = new createjs.Stage('demoCanvas');

circle = new createjs.Shape();
circle.graphics.beginFill('red').drawCircle(0, 0, 40);
circle.x = circle.y = 50;

stage.addChild(circle);
stage.update();

```
##小例子二
一个简单的用户交互
```js
displayObject.addEventListener('click', handleClick);
function handleClick(e) {
  // 点击事件
}

displayObject.addEventListener('mousedown', handlePress)
function handlePress(e) {
  e.addEventListener('mousemove', handleMove);
}

function handleMove(e) {
  
}
```

##小例子三
这个例子移动了之前例子中创建的一个形状
```js
// 在下一桢更新舞台
createjs.Ticker.addEventListener('tick', handleTick);

function handleTick() {
   //圆将会右移十个单位
      circle.x += 10;
      if (circle.x > stage.canvas.width) { circle.x = 0; }
      stage.update();
  }
```

##其它的特性
EaselJS 还有一些内置的支持哦!

- canvas 的阴影和合并操作
- Ticker 一个全局的心跳器
- Filters 过滤器 有ColorMatrixFilter, AlphaMaskFilter, AlphaMapFilter, BlurFilter 参见Filter 了解更多信息
－ SpriteSheetUtils 和 SpriteSheetBuilder 可以在运行时管理 SpriteSheet 相关的功能

##浏览器支持
在支持canvas的浏览器都支持 EaselJS (http://caniuse.com/canvas),不同的平台下浏览的性能不太一致，Android 由于缺少Canvas 的硬件支持，平均来讲比大多数的浏览器更慢