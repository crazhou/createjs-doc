##ButtonHelper Class
ButtonHelper 是在MovieClip 和 Sprite 实例上创建交互效果的一个工具类, 这个类从一个对象会拦截鼠标事件
并且自动调用 gotoAndStop 和 gotoAndPlay, ... 会增加一个手型鼠标，并可以让用户定义点击状态的帧

ButtonHelper 的实例，不需要添加到舞台，但他的引用应该避免被垃圾回收

注意以下的状态将不会工作，除非你调用了enableMouseOver

例子：
```js
var helper ＝ new createjs.ButtonHelper(myInstance, 'out', 'over', 'down', false, myInstance, 'hit');
myInstance.addEventListener('click', handleClick);
function handleClick(event) {
// Click Happend
}
```