 var btnNext = document.getElementById("next");
 var btnPrev = document.getElementById("prev");
 var imgs = document.getElementsByTagName("img");

 var img = imgs[0];
 var srcPath = "./src/image/";
 var imgArr = ["titian.jpg","chenxi.jpg","hushuiluori.jpg"];


 var index = 0;
 btnPrev.onclick = function (){
    index--;
    index = (index+3)%3;
    if(index < 0)
        index = 2;
    img.src = srcPath + imgArr[index];
 }

 btnNext.onclick = function (){
     index++;
     index = (index+3)%3;
     if(index >= imgArr.length)
         index = 0;
     img.src = srcPath+imgArr[index];
 }
