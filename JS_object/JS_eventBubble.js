/*
* 事件的冒泡：当后代元素上的事件被触发的时候，祖先元素上的相同事件也会触发
*   -如果不希望事件冒泡，可以通过事件对象来取消
* */

var span = document.getElementById("span1");
var box = document.getElementById("box1");
var box2 = document.getElementById("box2");
function func() {
    alert(this.innerText);
}

span.onclick = function (event) {
    event = event || window.event
    alert(this.innerText);
    arguments[0].cancelBubble = true;
};

box.onclick = function (event){
    event = event || window.event
    alert(this.innerText);
};

box.onmousemove = function (event) {
    event = event || window.event
    event.cancelBubble = true;
}

box1.cancelBubble = true;
/*
document.onmousemove = function(event){
    event = event || window.event
    box2.style.left  = event.clientX + document.documentElement.scrollLeft + "px";
    box2.style.top = event.clientY + document.documentElement.scrollTop + "px";;
}
*/


/*
* 事件的委派
*   -只绑定一次响应事件函数，即可应用到多个元素上，即使元素是后添加的
*      可以尝试绑定到这些元素的共同祖先元素上 可以提高性能
* */

var ul = document.getElementById("ul");
var add = document.getElementById("btn1");

/*add.onclick = function () {
    var li = document.createElement("li");
    li.innerHTML = "<a href = 'javascript:;' class = 'link'>DDDDDDDDDD</a>";
    ul.appendChild(li);
}*/

add.addEventListener("click",function () {
    var li = document.createElement("li");
    li.innerHTML = "<a href = 'javascript:;' class = 'link'>DDDDDDDDDD</a>";
    ul.appendChild(li);
},false);

ul.onclick = function (event){
    event = event || window.event;
    if(event.target.className == "link")
        alert("我是： " + event.target.innerText);
}


/*
* 事件绑定
*   -使用对象.事件 = function()绑定响应函数，只能同时为一个元素的一个事件绑定一个响应函数
*       后面的会覆盖前面的
* addEventListener()为元素绑定响应函数，先绑定先执行，其中this指向调用方法的元素
* param_1 事件字符串 不要"on"
* param_2 回调函数
* param_3 是否在捕获阶段触发事件，boolean类型，一般为false
*
* 以上方法在IE8及以下浏览器不兼容，可以用attchEvent()，后绑定先执行，其中this指向window
* param_1 事件字符串 要"on"
* param_2 回调函数
*  */

add.addEventListener("click",function(){
    alert("新添加了一个li标签！");
    console.log(this);
},false);



function bind(obj,eventStr,callback){

    if(obj.addEventListener){
        obj.addEventListener(eventStr,callback,false);
    }else{
        obj.attachEvent("on" + eventStr,function () {
            callback.call(obj);     //统一this指向，这里写匿名函数是因为attachEvent中callback由window调用，this指向window，要使this指向obj需要让我自己写的函数执行callback.call(obj)来修改this指向
        });
    }

}

bind(add,"click",function(){
    alert(this);
});