/*
* 通过DOM修改【内联样式】
* 内联样式优先级高，修改完后立即显示 覆盖外部样式
* 外部样式表属性后面加!important可以提升该属性的优先级
* 通过style设置和读取的都是内联样式
* */

//通过点击按钮修改样式大小p("box1");
var box1 = document.getElementById("box1");
var button1 = document.getElementById("btn1");

button1.onclick = function () {
    //元素.style.样式名 = 值；
    box1.style.width = "300px";
    box1.style.height = "300px";
    box1.style.backgroundColor = "yellow";
}


/*
* 获取元素当前样式
* 元素.currentStyle.属性名；
* getComputeStyle()
* 二者获取到的都是只读，不能修改，修改只能用.style
*
* style 只能返回内联样式数据
* currentStyle 返回元素所有最终使用的样式值
*
* */

var button2 = document.getElementById("btn2");
button2.onclick=function () {
   // console.log(box1.currentStyle.width); //此方法只有IE兼容

    //其他浏览器兼容 但IE8及以下不兼容
    /*
    * 两个参数：
    * param_1 目标元素
    * param_2 伪元素  一般为null
    * */
  /*  var obj = getComputedStyle(box1,null);
    console.log(obj.height);    //如果要获取的内容没有设置，则会获取真实值
    console.log(obj.width);
    console.log(obj.backgroundColor);*/

}

/*
* 获取指定元素指定样式值
*
* */
function getStyle(obj,name){
    //这里去掉window后 getComputeStyle变成了变量，先在函数里找，
    // 在去全局里找，找不到则报错。加了window后成为属性，找不到报
    // undefined，undefined转boolean为false；
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        return obj.currentStyle[name];
    }

}

/*
* 元素.clientWidth
* 元素.clientHeight
* 可以获取元素的可见高度和宽度，没有px单位  可以直接进行计算
* 会获取元素的内容区和内边距的宽度，不包括边框
* 这些属性都是只读的
* */


/*
* 元素.offsetWidth
* 元素.offsetHeight
* 可以获取元素整个可见高度和宽度，包括边框
* 属性只读
*
* 元素.offsetParent
* 可以用来获取当前元素的定位父元素
* 获取距离最近的开启了定位的祖先元素
*
* .offsetTop 与最近上定位元素的偏移量
* .offsetLeft 与最近左定位元素的偏移量
*
* .scrollWidth  滚动区域宽度
* .scrollHeight 滚动区域高度
* .scrollLeft 获取水平滚动条滚动的距离
* .scrollTop 获取垂直滚动条滚动的距离
*
* 当scrollHeight - scrollTop == clientHeight时 滚动条到底。
* 当scrollWidth - scrollLeft == clientWidth时，滚动条到最右
* 例子：协议确认
* */
