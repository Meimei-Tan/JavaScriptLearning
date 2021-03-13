/*
* 事件对象
*   -事件触发时，浏览器会将一个事件对象作为实参传递给事件响应函数
*       IE8不传递，而是作为window对象的属性保存
*       事件对象中封装了与事件相关的一切信息
* */
var areaDiv = document.getElementById("areaDiv");
var showMsg = document.getElementById("showMsg");


areaDiv.onmousemove = function (event) {
   /*
    //version 1.
   if(event != null){
        showMsg.innerHTML = "X = " + event.clientX + ", Y = " + event.clientY;  //clientX、clientY分别获取事件触发时鼠标的水平和垂直坐标
    }else{
        showMsg.innerHTML = "X = " + window.event.clientX + ", Y = " + window.event.clientY;  //clientX、clientY分别获取事件触发时鼠标的水平和垂直坐标
    }*/

   /*
    //version 2.
    if(!event){
        event = window.event;
    }
    showMsg.innerHTML = "X = " + event.clientX + ", Y = " + event.clientY;  //clientX、clientY分别获取事件触发时鼠标的水平和垂直坐标
*/

    //version 3.
    event = event || window.event;
    showMsg.innerHTML = "X = " + event.clientX + ", Y = " + event.clientY;  //clientX、clientY分别获取事件触发时鼠标的水平和垂直坐标

}

/*
* div跟随鼠标移动
* */
var box1 = document.getElementById("box1");
document.onmousemove = function (event) {   //document是整个html文档范围

    event = event || window.event;
    /*
      //verison 1.
    box1.style.left = event.pageX + "px";       //event.clientX 获取可视坐标  event.pageX获取相对整个页面坐标（在IE8中不支持）
    box1.style.top = event.pageY+ "px";*/

    //version 2.
    var scrollTop = document.documentElement.scrollTop;     //获取html滚动条的距离   滚动条属于html标签
    var scrollLeft = document.documentElement.scrollLeft;
    box1.style.top = event.clientY + scrollTop + "px";
    box1.style.left = event.clientX + scrollLeft + "px";

}




