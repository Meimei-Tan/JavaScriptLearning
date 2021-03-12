/*
* 获取元素节点的子节点
* 方法：
* getElementsByTagName(); 返回当前节点的指定标签名【后代节点】
*
* 属性
* childNodes 属性 表示当前节点的所有子节点 会获取包括文本节点在内的所有节点，HTML中的隐藏空白换行也算文本节点（IE以下不会将空白换行当成节点）
* children 属性 表示当前节点的所有【子元素】
* firstChild 属性 表示当前节点的第一个【子节点】
* firstElementChild 属性 表示当前节点的第一个【子元素】 不支持IE8 及以下
* lastChild 属性 表示当前节点的最后一个【子节点】
*
*
*
* 获取父节点和兄弟节点
* 属性：
* parentNode 表示当前元素的父节点
* previousSibling 表示当前节点的前一个兄弟节点
* previousElementSibling 表示当前元素的前一个兄弟元素 IE8及以下不兼容
* nextSibling 表示当前节点的后一个兄弟节点
*
*
* 获取文本节点的值用.nodeValue;
* */

//.innerText 不包含标签  .innerHTML包含