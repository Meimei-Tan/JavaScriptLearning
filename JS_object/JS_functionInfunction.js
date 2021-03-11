/*
* 函数中的方法call()和apply()
*   -两个方法都是函数对象的方法，都需要通过函数对象来调用
*   -当对函数调用call()和apply()都会调用函数执行
*   -调用call和apply时可以将一个对象指定为第一个参数
*       传入的对象成为函数的this,将函数变成了方法
*   -可以将实参放到对象参数之后
* */
 function fun(){

     alert("I am a function called \"fun\"");
 }


 function  fun1(){
     console.log(this);
}

function fun2(){
     document.write(this.name + "<br>");
}

var obj = {};
    //直接调用
    fun1(); //Window
    fun1.call(obj); //Object


var obj1 = {
    name:"Tom",
    sayName:function (){
        document.write(this.name + "<br>");
    }
}

var obj2 = {
    name:"John"
}

fun2.call(obj1);    //Tom
 fun2.call(obj2);   //John

 obj1.sayName.call(obj2);   //John
// fun.call();

/*
* 递归汉诺塔
* */
 function funx(a,b,c,count){
    if(count == 1)
        document.write(a + " to " + c + "<br>");
     else{
         funx(a,b,c,count - 1);
         document.write(a + " to " + c + "<br>");
         funx(b,a,c,count - 1);
     }
 }

 funx("A","B","C",3);