/*
*
*       原型：
*           原型属于同一类创建的所有对象的公有属性但属于每个对象，
*       即：每个对象都有该属性，每个对象相同属性的值可以不同，区别
*       于静态成员。
*           实例属性：每个对象自己的，别人可能有也可能没有。
*
* */

function  Person(name,age,height){
    this.name = name;
    this.age = age;
    this.height = height;
}
Person.ancester = "Monkey"; //定义静态属性
Person.prototype.weight = 120; //定义并初始化原型属性
Person.prototype.weight++;

//定义原型方法
Person.prototype.sayName = function (){
    alert(this.name);
}

var person_1 = new Person("Tom",18,1.9);
var person_2 = new Person("John",20,1.8);




person_1.weight++; //相当于person_1.weight = Person.prototype.weight + 1;




person_1.sayName();
person_2.sayName();

console.log(person_1);
console.log(person_2);

var person_3 = new Person("Coach",28,2.0);

console.log("person_3.sex：" + person_3.sex + "------1");
console.log("sex是否是person_3的属性：" + ("sex" in person_3) + "------1");

Person.prototype.sex = "unknown";



console.log("person_3.sex：" + person_3.sex + "------2");
/*
* 使用in检查属性是否属于某个对象时，如果对象中没有，但是原型中有，那么返回的结果也为true.
* */
console.log("sex是否是person_3的属性：" + ("sex" in person_3) + "------2");
console.log("sex是否是person_3自己的属性:" + person_3.hasOwnProperty("sex"));

console.log(person_3.hasOwnProperty("hasOwnProperty")); //person_3自身是否含有hasOwnProperty方法  false
console.log(person_3.__proto__.hasOwnProperty("hasOwnProperty")); //person_3的原型中是否含有hasOwnProperty方法 false
console.log(person_3.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));//person_3的原型的原型中是否含有  true
console.log(person_3.__proto__.__proto__.__proto__);   //person_3是否存在原型的原型的原型  null


console.log("person_3:" + person_3 + "------1");              //等价于输出console.log(person_3.toString());
console.log("person_3.toString:" + person_3.toString() + "------1");

person_3.toString = function(){
    return ("我是person_3");
};
console.log("person_3:" + person_3 + "------2");              //等价于输出console.log(person_3.__proto__.__proto__.toString());
console.log("person_3.toString:" + person_3.toString() + "------2"); //等价于输出console.log(person_3.toString());


