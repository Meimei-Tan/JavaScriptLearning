/*
* DOM对象属于宿主对象
* DOM Document Object Model 文档对象模型
* JS通过DOM对HTML文档进行操作
*
* 文档： 整个HTML文档
* 对象： 网页中的每一个部分都被转换成了对象 整个文档也是一个对象
* 模型： 使用模型来表示对象之间的关系，方便获取对象；体现节点与节点之间的关系
*
*
* 节点  分为四类：
* 文档节点：整个HTML
* 元素节点：HTML文档中的标签
* 属性节点：元素的属性
* 文本节点：HTML标签中的文本内容
*
* 浏览器为我们提供文档节点对象 此对象是Window属性
* */

/*
* onload时间会在整个HTML页面加载完成后触发
* */

window.onload = function (){

// console.log(document);

//获取Button对象
    var btn = document.getElementById("btn");

    console.log(btn.innerHTML);

    btn.onclick = function (){
        alert("Button is clicked.");
    }

};

/*
* DOM查询
* getElementById();
*
*
* //返回一个类数组,即使只找到一个结果
* getElementsByTagName();
* getElementsByName();
*
* document.body 保存body的引用
* document.documentElement 保存html根标签的引用
* document.all 代表页面中所有的元素 已弃用
* all = document.getElementByTagName("*") 同上
*
*
* 根据元素的class属性值查询一组元素节点对象
*document.getElementsByClassName() IE9以上.
*
*
* 以下方法IE8以下仍适用
* document.querySelector(".box div"); 需要一个CSS选择器来查询一个元素节点对象，只会返回第一个查询到的元素
* document.querySelectorAll(".box1);查找所有
*  */

/*
* DOM增删改方法
* document.createElement("div"); 用于创建一个元素节点对象，根据标签名创建元素节点对象；
*         .createTextNode(); 创建一个文本节点对象
* 父节点.insertBefore(newNode,oldNode);在父节点的指定子节点的前面添加一个兄弟节点
*      .removeChild(newNode,oldNode); 移除子节点    eg: obj.parentNode.removeChild(obj);我删我自己。
*      .replaceChild(); 替换子节点
* */

var button = document.createElement("input");
button.type = "button";
button.id = "btnx";
button.value = "创建的按钮";
var body = document.body;
body.appendChild(button);



