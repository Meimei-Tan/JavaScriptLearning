var imgList = document.getElementById("imgList");
var imgArr = document.getElementsByTagName("img");
var navDiv = document.getElementById("navDiv");
var outer = document.getElementById("outer");

var allA = document.getElementsByTagName("a");


imgList.style.width = 520 * imgArr.length + "px";


navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";

var index = 0;

allA[index].style.backgroundColor = "black";
for(var i = 0; i < allA.length;i++){
    allA[i].num = i;
    allA[i].onclick = function (){
        index = this.num;
        imgList.style.left = index * (-520) + "px";
        setA();
    }
}

//设置选中的A
function setA(){
    for(var i = 0; i < allA.length;i++){
        allA[i].style.backgroundColor = "orangered";
    }

    allA[index].style.backgroundColor = "black";
}

