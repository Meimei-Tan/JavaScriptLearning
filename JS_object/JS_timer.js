/*
* 定时器
* */

/*
* 定时调用：setInterval();
*   -定时器
*   -让一个函数，每隔一段时间调用一次
*       参数：
*           1.回调函数
*           2.调用的间隔时间（ms）
*       返回值：
*           number类型的数据，作为定时器的唯一标识
*
* 关闭定时器：clearInterval();
*   -参数：需要关闭的定时器的标识 可以接收任意类型的参数包括null undefined，参数则有效则执行，否则不执行
*   -给按钮绑定关闭定时器响应函数的时候，重复点击按钮会重复开启定时器，所以必须在开启新的定时器的时候关闭当前元素上的其他定时器。
* */
var count = 0;
var timer = setInterval(function () {
    document.body.innerHTML = count++ + "";
    if(count == 11)
        clearInterval(timer);
},1000);


/*
* 延时调用：setTimeout()
*   参数一：回调
*   参数二：时间
* 关闭延时调用：clearTimeout()
*
* */