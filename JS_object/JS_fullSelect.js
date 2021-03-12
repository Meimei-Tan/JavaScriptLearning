window.onload = function (){
    var checkedAllBox = document.getElementById("checkedAllBox");
    var checkedAllBtn = document.getElementById("checkedAllBtn");
    var checkedNoBtn = document.getElementById("checkedNoBtn");
    var checkedRevBtn = document.getElementById("checkedRevBtn");

    var items = document.getElementsByName("items");


    //全选/全不选
    //version 1.
   /* var isSelected = false;
    checkedAllBox.onclick = function(){
        isSelected = !isSelected;
        for(var i = 0; i < items.length;i++){
                items[i].checked = isSelected;
        }
    }*/
    //version 2.
    /*
    * 再响应事件函数中的this指向元素本身
    * */
    checkedAllBox.onclick = function (){
        for(var i = 0; i < items.length;i++){
            items[i].checked = this.checked;
        }
    }

    //反选
     checkedRevBtn.onclick = function(){
        //checkedAllBox.checked = false;    //全选/全不选 version 1.
        isSelected = false;
         for(var i = 0; i < items.length;i++){
             var isChecked= items[i].checked;
             items[i].checked = !isChecked;
         }
     }

    //提交

}
