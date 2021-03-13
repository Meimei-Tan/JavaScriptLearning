/*
* 拖拽元素
*  1.鼠标在待拖拽元素上按下时开始拖拽
*  2.拖拽元素跟随鼠标
*  3.鼠标松开时停止拖拽
*
*
* */

var box = document.getElementById("box");

/*
//version 1. 存在问题： 被拖拽元素被其他元素遮挡时mouseup事件失效
var flag = false;
box.onmousedown = function(){
        flag = true;
}

document.onmouseup = function () {
        flag = false;

}

document.onmousemove = function (event) {
    event = event || window.event;
    if(flag == true){
        box.style.left = document.documentElement.scrollLeft + event.clientX + "px";
        box.style.top = document.documentElement.scrollTop + event.clientY + "px";

    }
}*/


//version 2.

box.onmousedown = function (event) {
    event = event || window.event;
    var left = event.clientX - box.offsetLeft;
    var top = event.clientY - box.offsetTop;
    document.onmousemove = function (event) {
        event = event || window.event;
        box.style.left = document.documentElement.scrollLeft + event.clientX - left + "px";
        box.style.top = document.documentElement.scrollTop + event.clientY - top + "px";
    };

    document.onmouseup = function(){        //如果给box绑定则当被拖拽元素被其他元素遮挡时，mouseup失效
        document.onmousemove = null;
        document.onmouseup = null;
    };
    return false;
}

/*
* 当我们拖拽元素时，浏览器可能会默认搜索拖拽内容可以通过return false;关闭   IE8不行，对IE8使用setCapture();
* 方法：
* setCapture();将所有鼠标按下相关事件全部揽到调用该方法的对象上
* releaseCapture();释放
* 只有IE8支持
* */