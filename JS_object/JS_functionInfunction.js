/*
* 函数中的方法call()和apply()
*   -两个方法都是函数对象的方法，都需要通过函数对象来调用
*   -当对函数调用call()和apply()都会调用函数执行
*   -调用call和apply时可以将一个对象指定为第一个参数
* */
 function fun(){

     alert("I am a function called \"fun\"");
 }

fun.call();