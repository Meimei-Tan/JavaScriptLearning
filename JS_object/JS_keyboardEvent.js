/*
* 键盘事件：一般绑定给能获取到焦点或document对象
* onkeydown
*   -按键被按下
*   -对于onKeydown来说，如果一直按住不松手，则会一直触发
*   -当onKeydown连续触发时，第一次和第二次间隔会稍长，浏览器故意为之
* onkeyup
*   -按键被松开
*
* */


document.onkeydown = function(event){
    event = event || window.event;
    console.log(event.key);
}
document.onkeyup = function(){
    // if(event.key == "Enter")
    //     alert("success!");
}


var input = document.getElementById("input1");

input.onkeydown = function (event) {
    if(event.key == "Enter" && event.ctrlKey)
        alert("success!");
    return false; //取消默认行为，即输入不显示在文本框中
}