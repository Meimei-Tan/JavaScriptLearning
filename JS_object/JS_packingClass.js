/*
*
* JS中的三个包装类:可以将基本类型转换成对象
* String()
* Number()
* Boolean()
*
* */


var bool = new Boolean(false);  //所有对象转换成为boolean值都是true  即使是new Boolean(false);
if(bool){
    console.log("bool == true");
}

/*
* 方法和属性能添加给对象，但是不能添加给基本数据类型
*   当我们用基本类型去调用一些属性和方法的时候，浏览器会临时用包装类将基本类型值包装成对象，再调用方法和属性
*   调用完以后再拆包，原来的对象被销毁，故此对基本数据类型添加属性的时候，不能读取，因为此过程经历了两次包装
*   读取的时候第一次包装的对象已经销毁，第二次包装的对象没有之前添加的属性，所以读不出来
* */

var str = "aaaaa";
str.hello = "hello";
console.log(str.hello);


var obj = new Object();
console.log(obj.hello); //定义但未初始化