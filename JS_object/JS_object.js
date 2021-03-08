

console.time("timer");
let obj = {
    name: "John",
    age: 18,
    height:1.80,
    getName:function(){
        return this.name;
    }
};
//方法调用
console.log(obj.getName());

//普通函数实例
function b(){
    console.log("普通函数");
}


b();
//函数做返回值实例
function funx(){

    return function(){
        console.log("内部function.");
    }
}

var a = funx();
a();


//立即返回函数
(function(){
    console.log("立即执行函数.");
})();

//枚举对象中的属性
for(var n in obj) {
    console.log("属性名：" + n + ":" + obj[n]); //使用.n打印undefined;
}



console.log(document);






console.log(obj);

obj.name = "Tom";

console.log(obj);

delete obj.age;

console.log(obj);

console.log(typeof obj);

console.log("age" in obj);
console.log("name" in obj);


/*
* for...in 和   单纯的 var x in object 不一样.后者执行时不会将object属性名赋值给x
* */
// var x;
// console.log(x in obj);
// console.log(x);
console.timeEnd("timer");



/*
*
* 不写this,即使在对象内部对属性进行操作也是操作的全局变量
* 写了this则操作其调用对象本身的同名属性
* */
var name = "全局Name";

function fun(){
    console.log(name);
}

function fun2(){
    console.log(this.name);
}

let obj1 = {
    name:"唐僧",
    age:30,
    height:1.8,
    sayName:fun
}

let obj2 = {
    name:"孙悟空",
    age:30,
    height:1.8,
    sayName:fun2
}


obj1.sayName(); //输出全局Name：执行sayName的时候，在fun内部没有找到name变量则向上一级对象找，此时的上一级对象时window，故为全局变量name.
obj2.sayName(); //输出孙悟空：执行时，在fun内部没有找到name，则向上一级对象找，此时上一级对象时obj2，故返回obj2.name.


/*
* 以工厂方式创建对象.
* */

/*function Person(name,age,height){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.height = height;
    obj.sayName = function (){
        console.log(this.name);
    };
    return obj;
}

var person_1 = Person("Coach",18,1.9);
var person_2 = Person("Sarah",26,1.67);

console.log(person_1);
console.log(person_2);*/

/*
* 构造函数创建对象
* */

function Person(name,age,height){
    this.name = name;
    this.age = age;
    this.height = height;
    this.sayName = function (){
        console.log(this.name);
    };
}

var person_1 = new Person("Coach",18,1.9);
var person_2 = new Person("Sarah",26,1.67);

console.log(person_1);
console.log(person_2);


