/*
* BOM:浏览器对象模型
* BOM可以使通过JS来操作浏览器
*
* BOM对象：
*   -Window
*       代表整个浏览器的窗口，同时window也是网页中的全局对象，全局作用域中的对象都会作为window的属性和方法
*   -Navigator
*       代表当前浏览器的信息，通过该对象可以识别不同的浏览器
*   -Location
*       代表浏览器的地址栏信息，可以操作浏览器跳转页面
*   -History
*       代表浏览器的历史记录，由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，且该操作只在当次操作时有效
*   -Screen
*       代表用户屏幕相关信息，可以通过该对象获取用户显示器的相关信息
*
* 除了window，其他BOM对象都是以window的属性形式保存的
*
* Navigator
*   -由于历史原因，大部分属性已经不能用
*   -一般只用userAgent来判断浏览器的信息  userAgent等价于浏览器
*       userAgent 是一个字符串，描述了浏览器信息，不同浏览器有不同userAgent
* */

function isBrowserX(regExp){
    if(regExp.test(navigator.userAgent))
        alert("Yes!");
}

var regExp = /FireFox/;
isBrowserX(regExp);

/*
* IE浏览器可以通过MISE+版本号来判断IE版本
* Edge只能通过rv:11.0判断 IE 11 可能失误
*
* 可以通过浏览器的一些其他信息判断浏览器信息
* 可以通过ActiveXObject IE独有，故可判断
* */


/*
* History
*   -length 返回浏览器历史列表中url数量
*   -back()
*   -forward()
*   -go() 加载列表中某个具体页面 需要传递一个整数参数 表示向前跳转的页面数 可为负
*
* */