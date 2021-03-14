/*
* 通过【元素.style.样式】来修改元素的样式，每次浏览器都会重新渲染性能低
* 可以通过直接修改元素class来提高性能
* */

var box = document.getElementById("box");
var btn = document.getElementById("btn1");

btn.onclick = function () {
    box.className += " b2";
    console.log(box.clientHeight);
}

/*
* addClass()
* hasClass()
* removeClass()
* toggleClass() //切换一个class
*
* */