/*
* 正则表达式
*   可以将字符串中符合表达式的内容提取出来
* */

//var reg = new RegExp("ax","i"); //参数1 表达式，参数2 匹配模式 i忽略大小写  g全局匹配

//字面量创建正则表达式
// var reg = /ax/i;

//var reg = /a|b/i;
//var reg = /[ab]/i;  //[]表示单个字符
var reg = /[A-z]/i; //包含所有大小写

//可用于验证字符串中是否包含字符串
console.log(reg.test("ax"));
console.log(reg.test("bcax"));
console.log(reg.test("bcAx"));
console.log(reg.test("h"));

// /a[bc]d/  abd 或 acd
//[^a] 除了a都行

var str = "x1abc2lla;sdk3ldakjgl;5d";

console.log(str.split(/[0-9]/i));
console.log(str.search(/[0-9]/));  //只会返回搜索到的匹配的第一个字符的位置，即使是全局模式也不会改变
/*
* 将匹配到的结果封装的到一个数组中，即使只匹配到一个
* */
console.log(str.match(/[0-9]/ig));    //根据正则表达式，获取字符串中符合表达式的内容，默认只会找第一个；设置正则表达式全局模式可以输出所有,可以为表达式指定多种匹配模式


/*
*
* replace();替换目标内容
* */


console.log(str.replace(/[0-9]/g,"x0"));//不改变原字符串，默认替换匹配的第一个字符串，全局匹配模式将替换所有


/*
* 正则表达式语法
* */

//{n}正好出现n次
var reg = /(ab){3}/;

//{1,3}出现一到三次

//{3,}出现三次以上

//+至少出现一个a

//* 0个或多个 有没有都行

//? 0个或1个

//^a 以a开头   跟[^]不同

//a$ 以a结尾

//[^a$] 只能有a   同时使用^$必须完全符合

//.表示任意字符 除了换行和行结束符 /\./转义 注意用 new RegExp("\\.")等同于/\./ 而  new RegExp("\.")等同于/./


// \w 表示任意字母、数字、_

// \W 与\w相反

// \d 任意数字

// \D 与\d相反

// \s 空格

// \S 除了空格

// \b 单词边界：

var  regx = /\bchild\b/;
console.log(regx.test("hello children"));

// \B 与\b相反

/*
*
* 去除字符串前后空格，中间不去
* */


var stry = "   aa   aaa     ";

console.log(stry.replace(/^\s*|\s*$/g,""));


/*
* 电子邮件的正则表达式
* */

var regMail = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;

console.log("Email: " + regMail.test("320935096@qq.com.cn"));


/*
* 手机号
* */

var phoneNumber = /^1[3-8][0-9]{9}$/;   //$不能忘

var strx = "13095951981"
console.log(phoneNumber.test(strx));

