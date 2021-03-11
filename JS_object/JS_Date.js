/*
* Date对象
* 使用构造函数直接实例化一个对象则封装了当前执行代码的时间
* 可实例化封装指定时间的对象
* */

var date = new Date();
console.log(date);

var date2 = new Date("5/23/2020 11:11:11");
console.log(date2)

/*
* 方法：
* getDate(); 返回几号 1-31
* getDaty(); 返回周几 0-6 0：周日
* getMonth();月 0-11
* getFullYear();
* getTime();  返回格林威治1971开始的ms 计算机底层保存时间用时间戳
* Date.Now();获取当前时间戳
* date类型可直接进行算术运算
* */