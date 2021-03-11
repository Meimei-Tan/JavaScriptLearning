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
* getElementsByTagName();
* getElementsByName();
* */
