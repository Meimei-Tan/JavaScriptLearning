/*
* 数组
* */

//创建数组对象
var persons = new Array(1,2,3,4,5); //指定元素
var personsx = new Array(10);//指定数组长度
console.log(persons);
console.log(typeof persons);

var arr = [1,2,3,4,5];   //字面量创建数组：可以在创建时指定数组中的元素
console.log(arr);

//添加元素 aar[n] = x; 非连续添加元素会导致中间出现空元素
persons[0] = 1;
persons[10] = 11;
//读取元素 x = arr[n];


//数组长度获取 arr.length
/*
* length可直接修改  若修改大于已有元素数目，则多余的会空出来；小于则删除已有元素
* */
console.log(persons.length);
console.log(persons);
persons.length = 15;
console.log(persons);

//向数组末尾添加元素
persons[persons.length] = 99;

//二维数组
var arrx = [[1,2,3],[3,3],[7,8,9]];
console.log(arrx);

//数组的四个方法
    //方法1 push()向末尾添加一个或多个元素，返回变更后的数组的length
    var arrx_length = arrx.push([1,2,3],[3,3,4]);
    console.log(arrx);
    console.log(arrx_length);

    //方法2 pop()删除末尾的一个元素,返回删除的元素值
    var arrLastElem = arrx.pop();
    console.log(arrx);
    console.log(arrLastElem);

    //方法3 unshift()向数组的开头添加一个或多个元素，返回变更后的数组的length

    //方法4 shift()删除并返回数组的第一个元素

    //方法5 slice()获取数组索引从start 到 end的元素,包括arr[start]不包括arr[end]，返回截取到的元素数组
        /*
        * param_1 start
        * param_2 end  可省略 表示从start位置开始到数组结尾；为负则表示截取到结尾前的第几位
        * */
        console.log("首元素:" + persons.slice(0,1));

    //方法6 splice() 可以用于删除数组中的指定元素，并向数组添加新元素 注意！！该操作会影响原数组
        /*
        * param_1 开始的索引
        * param_2 要删除的数量
        * param_3 to param_n 要添加的元素会从开始的索引位置开始插入
        * */

        var delete_result = persons.splice(2,2,9,9);
        console.log(delete_result);
        console.log(persons);

    //方法7
        /*
        * concat() 用于连接两个及以上的数组并返回连接后的数组，不影响原数组
        * param_1 to param_n 待连接的数组
        * */

    //方法8
        /*
        * join() 将数组转换为字符串，不影响原数组
        * param_1 string 间隔符  默认逗号
        * */
        console.log(persons.join())

    //方法8
        /*
        * reverse() 数组倒序，返回操作后的数组，会影响原数组
        * */
        console.log(persons.reverse());

    //方法9
        /*
        * sort() 数组排序，默认按照Unicode顺序（即使是数字），具体按照数字大小排序需要传递函数对象作为回调，会影响原数组,
        * 函数需要两个参数浏览器会分别使用数组中的元素去调用回调函数，具体调用哪个元素不确定但a一定在b的前面
        * */
        var arraym = [1,3,7,2,89,6,399,42,53,68];
        console.log(arraym.sort(function (a,b){
            /*if(a > b)
                return 1;   //返回值大于0 交换位置
            else if(a < b)
                return -1;  //返回值小于0 不交换
            else
                return 0;   //返回值等于0 不交换   a = b*/
            return b - a;
        }));



//数组的遍历：将数组中的所有元素取出来
    //方法1 循环
    //方法2 forEach  IE8以上
        /*
        *   数组中有几个元素就执行几次，每次执行时，浏览器会将遍历到的元素以实参的形式传递出来
        * 我们可以通过定义形参来获取这些传递出来的元素
        * param_1 值
        * param_2 索引
        * param_3 正在遍历的数组本身
        * */
        persons.forEach(function (value,index,array){    //回调函数，由我创建但不由我们调用
            console.log("a = " + value);
        })

var xx = [];
        console.log(xx.length); //0

//数组去重
var array = new Array(1,2,2,2,1,3,3,4,7,7,7,7,5,6,7,7,7,7);
        /*
        * 函数：fun()用于数组去重：
        *   param_1 array 要执行操作的数组
        * */
        function fun(array){
            var arrm = [];

            arrm[0] = array[0];

            for (var i = 0;i < array.length;i++){

                for(var j = 0;j < arrm.length;j++){

                    //找到相同的，就删除原数组中的重复项
                    if(arrm[j] == array[i] && i != 0){
                        array.splice(i,1);              //删除一项之后原本的第i项变成了原来的第i+1项，但在下一次循环之后i+1，此时i+1下标指实际指到原来i+2,故此要判断原来的第i+1项，需要i-1;现在的目的是检测原来的第i+1项，也就是现在的第i项
                        i-=1;
                        break;
                    }

                    //找到最后一个还没有相同的,arrm就在尾部新增一个元素
                    if(j == (arrm.length - 1) && i != 0){
                        arrm[arrm.length] = array[i];
                        break;
                    }
                }

            }
            console.log(arrm);
            return array;
        }

        console.log(fun(array));