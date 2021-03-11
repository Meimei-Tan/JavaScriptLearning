/*
* 调用函数时，每次浏览器会给函数传递两个参数：this（Window）和arguments
*   -arguments 是一个类数组对象,能获取长度也能用索引来获取值
*   -arguments用来封装传递给函数的实参
*   -即使不用形参，也能同通过arguments来传递实参
*       arguments[n]表示第几个实参（从0开始）
*   -callee属性  表示指向函数本身的对象
* */

function fun(){
    console.log(arguments);
    console.log(arguments instanceof Array); //检查arguments是不是数组类型     数组都Array类型
    console.log(Array.isArray(arguments));
    console.log(arguments.callee === fun);

}

fun();

