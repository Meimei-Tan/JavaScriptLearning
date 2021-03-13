
/*
* 鼠标滚轮事件：
*   向下滚：box1变长
*   向上滚：box1变短
* */

var box1 = document.getElementById("box1");

box1.onmousewheel = function (event) {
    if(event.wheelDelta > 0 || event.detail < 0)
        box1.style.height = box1.clientHeight - 1 + "px";
    else
        box1.style.height = box1.clientHeight + 1 + "px";

    return false
}