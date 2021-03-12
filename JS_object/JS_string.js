/*
* String类型方法
*   concat() 连接字符串多个字符串
*   indexOf() 检索字符串中是否包含指定字符
*   lastIndexOf() 从后往前找
*   slice() 截取字符串 不影响原字符串 第二个参数省略则一直截取到结束，为负则表示截取到倒数第几位不要
*   split() 将一个字符串拆分为一个数组，参数为分割字符
*
* */

var str = "Hello,world";

console.log(str.length);
console.log(str[1]);

console.log(str.charAt(1));
console.log(str.charCodeAt(1)); //返回指定索引位置字符串的Unicode编码

console.log(String.fromCharCode(0x2686));
console.log(str.indexOf("ll",1)); //没找到返回-1,第二个参数指定从哪里开始找

var strArr = str.split(",");
var strX = str.split("");        //直接按字符分数组
console.log(strArr);
console.log(strX);

console.log(str.toUpperCase());//不影响原变量
console.log(str.toLowerCase());