##ColorFilter Class
给显示对象应用颜色变化

###例子
这个例子中画了一个红色的圆，然后将他转换为蓝色，这是通过给除了Alpha 以外的通道乘以0,然后给蓝色通道加上255;


###参数说明
－ [radMultiplier=1] Number 可选 红色通道的乘积因子，取值范围 0-1
－ [greenMultiplier＝1] Number 可选 绿色通道的乘积因子，取值范围 0-1
－ [blueMultiplier=1] Number 可选 蓝色通道的乘积因子，取值范围 0-1
－ [alphaMultiplier=1] Number 可选 Alpha 通道乘积因子 取值范围 0-1
－ [redOffset=0] Number 可选 红色通道的增量，取值范围 －255-255
－ [greenOffset=0] Number 可选 绿色通道的增量，取值范围 －255-255
－ [blueOffset=0] Number 可选 蓝色通道的增量，取值范围 －255-255
－ [alphaOffset=0] Number 可选 Alpha 通道的增量，取值范围 －255-255